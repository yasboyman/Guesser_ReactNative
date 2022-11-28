import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from "react";


export type RootStackParamList = {
    Home: undefined;
    GameScreen: { userNumber: number };
    EndGameScreen: undefined;
};

export type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'GameScreen'>;


// NumberInput //

export type ActionType = {
    type: string,
    payload: number
}

export type NumberInputProps = {
    setUserInput: React.Dispatch<ActionType>,
    confirmed:  React.Dispatch<React.SetStateAction<boolean | undefined>>;
}