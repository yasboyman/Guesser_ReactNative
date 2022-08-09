import React, {useContext, useEffect} from 'react';
import {Button, FlatList, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import Image from "../../assets/background.png";
import Title from "../../components/utilities/Title/Title";
import AppContext from "../../context/AppContext";
import {Entypo} from '@expo/vector-icons';

import AppButton from "../../components/utilities/Button/AppButton";


const EndGameScreen = ({navigation}: any) => {

    const {state, dispatch} = useContext(AppContext)
    const {
        computerGuess,
        isGameOver,
        isUserLying,
        reset,
        startGame,
        userNumber
    } = state;

    useEffect(() => {
        if (startGame) {
            dispatch({type: "RESET"})
            return navigation.navigate('Home')
        }
    }, [startGame])


    return (

        <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
            <View>
                <Title>GAME OVER</Title>
                <View style={styles.restartBtn}>
                    <Pressable onPress={() => dispatch({type: "START"})}>
                        <Button title={"Restart"}/>
                        <Entypo name="cycle" size={24} color="white"/>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

export default EndGameScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    restartBtn: {
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'center'
    }
});
