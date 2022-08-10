import React, {useContext, useEffect} from 'react';
import {Button, ImageBackground, Pressable, StyleSheet, View} from "react-native";
// @ts-ignore
import Image from "../../assets/background.png";
import Title from "../../components/utilities/Title/Title";
import AppContext from "../../../context/AppContext";
import {Entypo} from '@expo/vector-icons';
import AppButton from "../../components/utilities/Button/AppButton";

const GameOverImg = require('../../assets/GameOverImg.png')


const EndGameScreen = ({navigation}: any) => {

    const {state, dispatch} = useContext(AppContext)
    const {
        startGame,
        restartGame,
    } = state;

    useEffect(() => {
        if (restartGame) {
            dispatch({type: "RESET"})
            return navigation.navigate('Home')
        }
    }, [restartGame])
    console.log(state)

    return (
        <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
            <View>
                <Title>GAME OVER</Title>
                <Image src={GameOverImg} alt={"game over image"}/>
                <View style={styles.restartBtn}>
                    {/*<Pressable onPress={() => dispatch({type: "RESTART"})}>*/}
                        <Button onPress={() => dispatch({type: "RESTART"})} title={"Restart"}/>
                        {/*<Entypo name="cycle" size={24} color="white"/>*/}
                    {/*</Pressable>*/}
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
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
