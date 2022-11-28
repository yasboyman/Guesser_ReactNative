import React, {useContext, useEffect, useRef, useState} from 'react';
import NumberInput from "../../components/NumberInput";
import {StyleSheet, View, Text, FlatList, ImageBackground, Alert} from "react-native";
import AppButton from "../../components/utilities/Button/AppButton";

import Title from "../../components/utilities/Title/Title";
import GuessList from "../../components/GuessList";
import {useNavigation} from "@react-navigation/native";
import AppContext from "../../../context/AppContext";
import {generateRandomNum} from "../../components/utilities/RandomNumGenerator/RandomNumGenerator";
import {GameScreenProps} from "../../types/index.js";

const Image = require("../../assets/background.png")



let minBoudary = 1
let maxBoundary = 100


const GameScreen = ({route}: GameScreenProps) => {
    const [PrevComputerGuess, setPrevComputerGuess] = useState<number[]>([])
    const {state, dispatch} = useContext(AppContext)
    const {
        computerGuess,
        userNumber
    } = state;

    const navigation = useRef(useNavigation());

    useEffect(() => {
        if (userNumber) {
            return dispatch({type: "GUESS", payload: generateRandomNum(1, 100, userNumber)})
        }
    }, [])


    useEffect(() => {
        setPrevComputerGuess((state) =>
            [...state, computerGuess]
        )
    }, [computerGuess])


    useEffect(() => {
        if (userNumber !== null && userNumber === computerGuess) {
            dispatch({type: "GAMEOVER"})
            minBoudary = 1
             maxBoundary = 100
            // @ts-ignore
            return navigation.current.navigate('EndGameScreen');

        }
    }, [computerGuess, userNumber])

    const guess = (direction: string) => {
        if (direction === 'Higher' && computerGuess > userNumber ||
            direction === 'Lower' && computerGuess < userNumber) {
            Alert.alert('Liar!!', 'I pitty the fool that lies', [{text: 'My bad dwag', style: 'destructive'}])
            return;
        }

        if (direction === 'Higher') {
            minBoudary = computerGuess + 1
        } else {
            maxBoundary = computerGuess - 1
        }
        dispatch({type: 'GUESS', payload: generateRandomNum(minBoudary, maxBoundary, computerGuess)})
    }

    console.log(minBoudary, maxBoundary)
    return (
        <View style={styles.inputContainer}>
            <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
                <Title>Opponents Guess</Title>
                <View style={styles.computerNum}>
                    <Title>{computerGuess}</Title>
                </View>

                <View style={styles.buttonsContainer}>
                    <AppButton onPress={() => guess('Higher')} title={'Higher'}/>
                    <Text>Or</Text>
                    <AppButton onPress={() => guess('Lower')} title={'Lower'}/>
                </View>

                <View style={styles.prevGuessContainer}>
                    <FlatList
                        data={PrevComputerGuess}
                        renderItem={(item: any) => {
                            return item.item !== null && <GuessList number={item.item}/>
                        }}/>
                </View>
            </ImageBackground>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginTop: '10%'
    },
    computerNum: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 9,
    },
    buttonsContainer: {
        padding: 10,
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'center'
    },
    prevGuessContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        width: '60%',
        padding: 20,
    },
    image: {
        flex: 1,
    },
});
