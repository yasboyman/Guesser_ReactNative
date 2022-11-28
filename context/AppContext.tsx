import React, {useMemo, useReducer, useState} from 'react';
import {generateRandomNum} from "../src/components/utilities/RandomNumGenerator/RandomNumGenerator";

interface TodoContext {
    userNumber: number,
    setUserNumber?: React.Dispatch<React.SetStateAction<number[]>>
}

type StateType = {
    userNumber: number,
    computerGuess: number,
    isGameOver: boolean,
    isUserLying: boolean,
    startGame: boolean,
    reset: boolean,
    restartGame: boolean,
}

const initialState = {
    userNumber: null,
    computerGuess: null,
    isGameOver: false,
    isUserLying: false,
    startGame: false,
    reset: false,
    restartGame: false,
};

type ListAction = {
    type: "USERNUMBER" | "START" | "GUESS" | "GAMEOVER" | "RESTART" | "RESET" ;
    payload?: number | boolean | StateType
};

const reducer = (state: StateType, action: ListAction) => {
    switch (action.type) {
        case 'USERNUMBER':
            return {...state, userNumber: action.payload}
        case 'START':
            return {...state, startGame: true}
        case 'GUESS':
            return {...state, computerGuess: action.payload}
        case 'GAMEOVER':
            return {...state, isGameOver: true,}
        case 'RESTART':
            return {...state, isGameOver: true, restartGame: true}
        case 'RESET':
            return {
                userNumber: null,
                computerGuess: null,
                isGameOver: false,
                isUserLying: false,
                startGame: false,
                reset: false,
                restartGame: false,
            }
        default:
            return state
    }
}

const AppContext = React.createContext<any>({} as any)

export const AppProvider = ({children}: {children: JSX.Element }) => {
    const [userNumber, setUserNumber] = useState<number>(0)
    const [computerGuess, SetComputerGuess] = useState<number>()
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return {state, dispatch};
    }, [state, dispatch])

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext