import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";

const NumberInput = ({ userInput, setUserInput, confirmed }: any) => {

    const [showButtons, setShowButtons] = useState<boolean>(true)
     const [input, setInput] = useState<string| null>(null)

    const handleConfirm = () => {
        let chosenNum = 0
        if (typeof input === "string") {
             chosenNum = parseInt(input)
        }
        if(chosenNum <= 0 || isNaN(chosenNum)) {
            Alert.alert('Invalid input','Please enter a number from 1 to 99',[{text: 'Okay', style: 'destructive'}])
            handleReset()
        } else {
            setUserInput({type:'USERNUMBER', payload:chosenNum })
            setShowButtons(false)
            confirmed(true)
            setInput('')
        }
    }

    const handleReset = () => {
        setUserInput({type:'USERNUMBER', payload:0})
        confirmed(false)
        setShowButtons(true)
        setInput('')
    }

    return (
        <View style={styles.inputContainer}>
            <View >
                <TextInput
                     style={styles.textInput}
                    keyboardType='numeric'
                    onChangeText={(text) => setInput(text.replace(/[^0-9]/g, ''),)}
                    value={input}
                    maxLength={2}
                />

            </View>
             <View style={styles.buttonsContainer}>
                <Button title={'Reset'} onPress={handleReset}/>
                <Button title={'Confirm'} onPress={handleConfirm}/>
            </View>
        </View>
    );
};

export default NumberInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '70%',

    },
    textInput: {
        backgroundColor: '#fff',
        alignItems: 'center',
         justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#08c2e3',
        marginVertical: 10,
        borderRadius: 6,
        height: 50,
        elevation: 10,

    },
    buttonsContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 6,
        // elevation: 10,
    }
});