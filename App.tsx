import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartGameScreen from "./src/screens/StartGameScreen/StartGameScreen";
import GameScreen from "./src/screens/GameScreen/GameScreen";
import EndGameScreen from "./src/screens/EndGameScreen/EndGameScreen";
import { AppProvider } from "./context/AppContext";
import PreStart from "./src/screens/PreStart/PreStart";
import startGameScreen from "./src/screens/StartGameScreen/StartGameScreen";

type RootStackParamList = {
  PreStart: undefined;
  Home: undefined;
  GameScreen: { userNumber: string };
  EndGameScreen: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="PreStart"  screenOptions={{
              headerShown: false
          }}>
            <Stack.Screen name="PreStart" component={PreStart} />
            <Stack.Screen name="Home" component={startGameScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="EndGameScreen" component={EndGameScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
      marginTop: '40%'

  },
  image: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // width: "100%",
    // opacity: 0.9,
  },
});
