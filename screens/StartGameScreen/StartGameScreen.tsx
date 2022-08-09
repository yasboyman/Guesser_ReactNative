import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";

// @ts-ignore
import image  from '../../assets/background.png';
import {StatusBar} from "expo-status-bar";
import NumberInput from "../../components/NumberInput";
import AppButton from "../../components/utilities/Button/AppButton";
import GameScreen from "../GameScreen/GameScreen";
import AppContext from "../../context/AppContext";


const StartGameScreen = ({ navigation }: any) => {
    // const [userNumber, setUserNumber] = useState<number>()
    const [confirmed, setConfirmed] = useState<boolean>()

    const {state, dispatch} = useContext(AppContext)
    const {userNumber, startGame} = state

    console.log('THIS CONTEXT:', state)
    console.log('THIS startGame:', startGame)


    const confirmedValue = useMemo( () => {
        return {confirmed};
    },[confirmed])

    console.log('CONFIRMED VALUE    :', confirmedValue)


    useEffect(() => {
        dispatch({type: 'START' })
        startGame && navigation.navigate('GameScreen')
        setConfirmed(false)
    }, [confirmedValue])


    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                {/*<AppModal modalOn={modal} setModal={setModal}/>*/}
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
