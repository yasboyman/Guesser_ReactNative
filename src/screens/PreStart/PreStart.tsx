import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppContext from "../../../context/AppContext";
import AppModal from "../../components/utilities/Modal/AppModal";
import AppButton from "../../components/utilities/Button/AppButton";

const image = require("../../assets/background.png");

const PreStart = ({ navigation }: any) => {
  const [letsStart, setLetsStart] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { state, dispatch } = React.useContext(AppContext);
  const { startGame } = state;

  useEffect(() => {
    letsStart && dispatch({ type: "START" });
    startGame && navigation.navigate("Home");
    setLetsStart(false);
  }, [letsStart]);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text onPress={() => setModalOpen(true)}>How to play</Text>
        <AppModal
          modalOn={modalOpen}
          setModal={setModalOpen}
          title="How to play"
          message={`It's simple... You pick a number, and computer tries to guess in 4 attempts, with hints from you, whether the number is higher, or lower than the guess`}
        />
        <View style={styles.buttonContainer}>
          <AppButton
            title="Lets start"
            onPress={() => setLetsStart(true)}
            backgroundColor="#042c2b"
            variant="thick"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PreStart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
      flexDirection: "row",
      height: '100%'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     width: "100%",
  },
  buttonContainer: {
    width: "80%",
    height: 0,
    flex: 2,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
});
