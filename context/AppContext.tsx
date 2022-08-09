import React, {useMemo, useReducer, useState} from 'react';
import {generateRandomNum} from "../components/utilities/RandomNumGenerator/RandomNumGenerator";

interface TodoContext {
    userNumber: number,
    setUserNumber?: React.Dispatch<React.SetStateAction<number[]>>
}

const initialState = {
    userNumber: null,
    computerGuess: null,
    isGameOver: false,
    isUserLying: false,
    startGame: false,
    reset: false,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'USERNUMBER':
            return {...state, userNumber: action.payload}
        case 'START':
            return {...state, startGame: true}
        case 'GUESS':
            return {...state, computerGuess: action.payload}
        case 'GAMEOVER':
            return {...state, isGameOver: true, startGame: false}
        case 'RESET':
            return {  userNumber: null,
                computerGuess: null,
                isGameOver: false,
                isUserLying: false,
                startGame: false,
                reset: false,}
        default:
            return state
    }
}


  const AppContext =  React.createContext<any>({} as any)


export const AppProvider = ({ children} ) => {
    const [userNumber, setUserNumber] = useState<number>(0)
    const [computerGuess, SetComputerGuess] = useState<number>()
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo( () => {
        return {state, dispatch};
    },[state,dispatch])


    return(
        <AppContext.Provider value={contextValue} >
            {children}
        </AppContext.Provider>
    )

}

export default AppContext