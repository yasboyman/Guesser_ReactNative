import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import NumberInput from "../../components/NumberInput";
import GameScreen from "../GameScreen/GameScreen";
import AppContext from "../../../context/AppContext";

const image =  require('../../assets/background.png')


const StartGameScreen = ({ navigation }: any) => {
    const [confirmed, setConfirmed] = useState<boolean>()
    const { state, dispatch } = React.useContext(AppContext)
    const {startGame} = state

    const confirmedValue = useMemo( () => {
        return {confirmed};
    },[confirmed])

    useEffect(() => {
         confirmedValue?.confirmed && dispatch({type: 'START' })
        startGame && navigation.navigate('GameScreen')
        setConfirmed(false)
    }, [confirmedValue])

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.textTitle}>Guess My Number</Text>
                <StatusBar style="light"/>
                <View style={styles.inputContainer}>
                    <NumberInput setUserInput={dispatch} confirmed={setConfirmed}/>
                </View>
            </ImageBackground>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 60,

    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',

    },
    inputContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
