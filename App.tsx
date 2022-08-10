import {StatusBar} from 'expo-status-bar';
import {
    Button,
    ImageBackground,
    InputAccessoryView, SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import StartGameScreen from "./src/screens/StartGameScreen/StartGameScreen";
import GameScreen from "./src/screens/GameScreen/GameScreen";
import EndGameScreen from "./src/screens/EndGameScreen/EndGameScreen";
import {AppProvider} from "./context/AppContext";

type RootStackParamList = {
    Home: undefined;
    GameScreen: { userNumber: string };
    EndGameScreen:  undefined;
};

const App = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen
                                name="Home" component={StartGameScreen}
                                options={{
                                    title: 'Start',
                                    headerStyle: {
                                        backgroundColor: '#7974c8',
                                    },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <Stack.Screen name="GameScreen" component={GameScreen}/>
                            <Stack.Screen name="EndGameScreen" component={EndGameScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </AppProvider>
        </SafeAreaView>
    );
}
export default App

const styles = StyleSheet.create({
    container: {
         alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        opacity: 0.9
    },
})
