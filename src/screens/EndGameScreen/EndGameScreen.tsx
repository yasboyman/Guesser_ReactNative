import React, {useContext, useEffect} from 'react';
import {Button, ImageBackground, Pressable, StyleSheet, View, Image} from "react-native";
// @ts-ignore
import Title from "../../components/utilities/Title/Title";
import AppContext from "../../../context/AppContext";
import {Entypo} from '@expo/vector-icons';


const EndGameScreen = ({navigation}: any) => {

    const {state, dispatch} = useContext(AppContext)
    const {restartGame,} = state;

    useEffect(() => {
        if (restartGame) {
            dispatch({type: "RESET"})
            return navigation.navigate('Home')
        }
    }, [restartGame])
    console.log(state)

    return (
        <ImageBackground source={require("../../assets/background.png")} resizeMode="cover" style={styles.image}>
            <View>
                <Title>GAME OVER</Title>
                <View style={styles.gameOverImageContainer}>
                    <Image source={require('../../assets/trans-game-over.png')} style={styles.gameOverImage}/>
                </View>

                <View style={styles.restartBtn}>
                    <Button onPress={() => dispatch({type: "RESTART"})} title={"Restart"}/>
                </View>
            </View>
        </ImageBackground>
    );
};

export default EndGameScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center'
    },
    restartBtn: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    gameOverImageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: 'center',
        margin: 30,
        borderWidth: 3,
        backgroundColor: '#e3e3e3',
        overflow: 'hidden',
        padding: 10,
        marginTop: -20
    },
    gameOverImage: {
        flex: 1,
        width: '85%',
        height: '100%',
        resizeMode: 'contain',
        transform: [{rotate: '-30deg'}]
    }
});
