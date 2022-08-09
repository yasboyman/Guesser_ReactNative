import React, {useContext, useEffect, useRef, useState} from 'react';
import NumberInput from "../../components/NumberInput";
import {StyleSheet, View, Text, FlatList, ImageBackground, Alert} from "react-native";
import AppButton from "../../components/utilities/Button/AppButton";
import Image from "../../assets/background.png";
import Title from "../../components/utilities/Title/Title";
import GuessList from "../../components/GuessList";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from "@react-navigation/native";
import AppContext from "../../context/AppContext";
import {generateRandomNum} from "../../components/utilities/RandomNumGenerator/RandomNumGenerator";


type RootStackParamList = {
    Home: undefined;
    GameScreen: { userNumber: number };
    EndGameScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'GameScreen'>;


let minBoudary = 1
let maxBoundary = 100


const GameScreen = ({route}: Props) => {
    const [PrevComputerGuess, setPrevComputerGuess] = useState<any[]>([])
    const {state, dispatch} = useContext(AppContext)
    const {
        computerGuess,
        isGameOver,
        isUserLying,
        reset,
        startGame ,
        userNumber} = state;

    console.log('Comp Log::',computerGuess);


    useEffect(() => {
        if (userNumber) {
            return dispatch({ type: "GUESS", payload: generateRandomNum(1,100, userNumber) })
        }
        console.log('RENDER 1')
    }, [])


    useEffect(() => {
        setPrevComputerGuess((state) =>
            [...state, computerGuess]
        )
    }, [computerGuess])

    const navigation = useRef(useNavigation());
// 10135347608

    useEffect(() => {
        if (userNumber === computerGuess) {
            dispatch({type: "GAMEOVER" })
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
        dispatch({ type: 'GUESS',payload:generateRandomNum(minBoudary, maxBoundary, computerGuess)})
    }

    const HandleGameOver =  () => {
        // -  Here Ideally we want to reset the whole state, perhaps context should be used - ?? //
    }

    return (
        <View style={styles.inputContainer}>
            <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
                <Title>Opponents Guess</Title>
                <View style={styles.computerNum}>
                    <Title>{computerGuess}</Title>
                </View>


                {/*<NumberInput userInput={computerGuess} setUserInput={setComputerGuess}/>*/}
                <View style={styles.buttonsContainer}>
                    {/*<AppButton onPress={() => console.log('handleConfirm')} title={'Confirm'}/>*/}
                    <AppButton onPress={() => guess('Higher')} title={'Higher'}/>
                    <Text>Or</Text>
                    <AppButton onPress={() => guess('Lower')} title={'Lower'}/>
                </View>
                <View style={styles.prevGuessContainer}>
                    <FlatList
                        data={PrevComputerGuess}
                        renderItem={(item) => (
                            <GuessList number={item.item}/>
                        )}/>
                </View>
            </ImageBackground>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
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
