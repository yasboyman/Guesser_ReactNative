import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import AppButton from "../Button/AppButton";
import Title from "../Title/Title";

type ModalProps = {
  modalOn: boolean;
  setModal: (value: boolean) => void;
  title?: string;
  message?: string;
};

const appModal = ({ modalOn, setModal, message, title }: ModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOn}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.container}>
          <Title>{title}</Title>
          <Text>{message || "Close"} </Text>
          <View style={styles.closeBtnContainer}>
            <AppButton onPress={() => setModal(false)} title={"Close"} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default appModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3c6d6d",
    marginTop: 150,
    margin: 45,
    padding: 10,
    height: "100%",
    borderRadius: 8,
  },
  closeBtnContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
    width: "100%",
  },
});
