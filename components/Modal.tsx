import React, { useContext, useState } from "react";
import {
  Text,
  Modal as RNModal,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { PortalContext } from "./Portal";
import { theme } from "../constants/styles";

type ModalActionType = {
  text: string;
  type?: "warning" | "confirm" | "default";
};

type ModalConfigType = {
  title?: string;
  content: string;
  actions?: ModalActionType[];
  closeOnMaskClick?: boolean;
};

const Modal = (props: ModalConfigType) => {
  const {
    content,
    title = "提示",
    actions = [{ text: "确认" }],
    closeOnMaskClick = false,
  } = props;
  const [modalVisible, setModalVisible] = useState(true);
  const { telepop } = useContext(PortalContext);

  const handleClose = () => {

    setModalVisible(false);
    telepop();
  };

  return (
    <RNModal animationType="fade" visible={modalVisible} transparent={true}>
      <Pressable
        style={style.modalMask}
        onPress={closeOnMaskClick ? handleClose : undefined}
      />
      <View style={style.modalContainer}>
        <View style={style.modalHeader}>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "800" }}
          >
            {title}
          </Text>
        </View>
        <View style={style.modalBody}>
          <Text style={{ textAlign: "center", fontSize: 18 }}>{content}</Text>
        </View>

        <View style={style.modalFooter}>
          {actions.map((item, index) => (
            <TouchableHighlight
              key={index}
              style={[
                style.modalActionButtonContainer,
                index === 0 ? { borderBottomStartRadius: 16 } : undefined,
                index === actions.length - 1
                  ? { borderBottomEndRadius: 16 }
                  : undefined,
              ]}
              onPress={handleClose}
            >
              <View
                style={[
                  style.modalActionButton,
                  index === 0 ? { borderBottomStartRadius: 16 } : undefined,
                  index === actions.length - 1
                    ? { borderBottomEndRadius: 16 }
                    : undefined,
                ]}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  {item.text}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </RNModal>
  );
};

const style = StyleSheet.create({
  modalMask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    position: "absolute",
    // marginTop: "50%",
    top: "30%",
    backgroundColor: theme.defaultTheme.__BG,
    alignSelf: "center",
    borderRadius: 16,
    width: "80%",
    maxWidth: 600,
  },
  modalHeader: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
  },
  modalBody: {
    flexDirection: "column",
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  modalFooter: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#ededed",
  },

  // TouchableHighlight
  modalActionButtonContainer: {
    flex: 1,
    alignSelf: "center",
  },

  // View
  modalActionButton: {
    paddingVertical: 16,
    backgroundColor: "white",
    borderRightWidth: 1,
    borderColor: "#ededed",
  },
});

// TODO: props 可以传入特征 ref
export const useModal = () => {
  const { teleport } = useContext(PortalContext);

  const Alert = (config: ModalConfigType) => {
    teleport(<Modal {...config} />);
  };

  const Confirm = (config: ModalConfigType) => {
    teleport(
      <Modal
        {...config}
        actions={[
          { text: "取消", type: "default" },
          { text: "确认", type: "confirm" },
        ]}
      />
    );
  };
  return {
    Alert,
    Confirm,
  };
};
