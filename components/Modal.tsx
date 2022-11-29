import React, { useContext, useState } from "react";
import { Text, Modal as RNModal, StyleSheet, View, Pressable } from "react-native";
import Card from "./Card";
import { PortalContext } from "./Portal";

type ModalConfigType = {
  content: string;
};

const Modal = (props: ModalConfigType) => {
  const { content } = props;
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <RNModal animationType="fade" visible={modalVisible} transparent={true}>
      <Pressable style={style.modalView} onPress={() => setModalVisible(false)}>
        <View style={style.modalBody}>
          <Card title="Modal">
            <Text>{content}</Text>
          </Card>
        </View>
      </Pressable>
    </RNModal>
  );
};

const style = StyleSheet.create({
  modalView: {
    paddingHorizontal: 40,
    paddingBottom: "40%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalBody: {
    marginBottom: 20,
  },
});

const useAlert = (page: string) => {
  const { teleport } = useContext(PortalContext);
  const Alert = (config: ModalConfigType) => {
    teleport(page, <Modal {...config} />);
  }
  return Alert;
};

export const useModal = (page: string) => {
  const Alert = useAlert(page);
  return {
    Alert
  }
}

// Modal.alert("home", {});
