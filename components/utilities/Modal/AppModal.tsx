import React from 'react';
import {Modal, StyleSheet, View, Text} from "react-native";
import AppButton from "../Button/AppButton";

type ModalProps = {
    modalOn: boolean;
    setModal: (value: boolean) => void;
    message?: string
}

const appModal = ({modalOn, setModal, message}: ModalProps) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOn}
            onRequestClose={ () => {
                setModal(false)
            }}
        >
            <View>
                <Text>{message || 'Close'} </Text>
                <AppButton
                    onPress={ () => setModal(false)}
                    title={'Close'}/>
            </View>

        </Modal>
    );
};

export default appModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efefef'
    },
})
