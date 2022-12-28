import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Platform,
  ToastAndroid,
} from "react-native";
import { useContext, useEffect, useRef } from "react";
import { PortalContext } from "./Portal";

type ToastConfigType = {
  content: string;
  position?: "top" | "bottom" | "center";
  duration?: number;
  maskClickable?: false;
};

const Toast = (props: ToastConfigType) => {
  const {
    content,
    position = "bottom",
    duration = 2000,
    maskClickable = true,
  } = props;

  const { telepop } = useContext(PortalContext);
  const timeOutRef = useRef<any>(null);

  const handleClose = () => {
    telepop();
  };

  useEffect(() => {
    timeOutRef.current = setInterval(() => {
      handleClose();
    }, duration);

    return () => {
      clearInterval(timeOutRef.current);
    };
  }, []);

  return (
    <>
      {!maskClickable ? <Pressable style={style.toastMask} /> : null}
      <View style={style.toastContainer}>
        <Text style={{ color: "white", fontSize: 18 }}>{content}</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  toastMask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 9998,
  },
  toastContainer: {
    animationType: "fade",
    position: "absolute",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "black",
    opacity: 0.8,
    borderRadius: 8,
    bottom: "6%",
    alignSelf: "center",
    zIndex: 9999,
  },
});

export const useToast = () => {
  const { teleport } = useContext(PortalContext);

  const Show = (config: ToastConfigType) => {
    if (Platform.OS === "android") {
      const { content, duration = 2000, position = "bottom" } = config;
      ToastAndroid.showWithGravity(
        content,
        duration,
        ToastAndroid[`${position?.toUpperCase()}`]
      );
    } else {
      teleport(<Toast {...config} />);
    }
  };
  return { Show };
};
