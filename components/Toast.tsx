import {
  View,
  Modal as RNModal,
  Pressable,
  StyleSheet,
  Text,
  Platform,
  ToastAndroid,
} from "react-native";
import { useContext, useEffect, useState, useRef } from "react";
import { PortalContext } from "./Portal";

type ToastConfigType = {
  content: string;
  position?: "top" | "bottom" | "center";
  durtion?: number; // ms
  maskClickable?: false;
};

const Toast = (props: ToastConfigType) => {
  const {
    content,
    position = "bottom",
    durtion = 2000,
    maskClickable = true,
  } = props;

  const { telepop } = useContext(PortalContext);
  const [toastVisible, setToastVisible] = useState(true);
  const timeOutRef = useRef<any>(null);

  const handleClose = () => {
    setToastVisible(false);
    telepop();
  };

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      handleClose();
    }, durtion);

    return () => clearTimeout(timeOutRef.current);
  }, []);

  return (
    <>
      {/* <RNModal animationType="fade" transparent visible={toastVisible}> */}

      {!maskClickable ? <Pressable style={style.toastMask} /> : null}
      <View style={style.toastContainer}>
        <Text style={{ color: "white", fontSize: 18 }}>{content}</Text>
      </View>
      {/* </RNModal> */}
    </>
  );
};

const style = StyleSheet.create({
  toastMask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  toastContainer: {
    animationType: "fade",
    position: "absolute",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "black",
    opacity: 0.8,
    borderRadius: 8,
    bottom: "10%",
    alignSelf: "center",
    zIndex: 9999,
  },
});

export const useToast = () => {
  const { teleport } = useContext(PortalContext);

  const Show = (config: ToastConfigType) => {
    if (Platform.OS === "android") {
      const { content, durtion = 2000, position = "bottom" } = config;
      ToastAndroid.showWithGravity(
        content,
        durtion,
        ToastAndroid.CENTER
        // ToastAndroid[`${position?.toUpperCase()}`]
      );
    } else teleport(<Toast {...config} />);
  };
  return { Show };
};
