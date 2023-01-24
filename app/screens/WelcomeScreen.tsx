import React from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import { TextStyles } from "../AppStyles";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const onLoginPress = () => {
  console.log("Login press!");
};

const onRegisterPress = () => {
  console.log("Register press!");
};

function WelcomeScreen(props: any) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        blurRadius={5}
        source={require("../assets/exercise_1/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={require("../assets/exercise_1/logo-red.png")}
          />
          <AppText color="black" style={styles.taglineTxt}>
            Sell what you don't need!
          </AppText>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton text="Login" color="primary" onPress={onLoginPress} />
          <AppButton
            text="Register"
            color="secondary"
            onPress={onRegisterPress}
          />
        </View>
        <View style={styles.bottomBuffer} />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  bottomBuffer: { margin: 10 },
  logoImg: {
    width: 100,
    height: 100,
  },
  taglineTxt: {
    fontSize: 25,
    fontWeight: "700",
    padding: 10,
    textShadowRadius: 1,
  },
  logoContainer: {
    top: 50,
    position: "absolute",
    alignItems: "center",
  },
});

export default WelcomeScreen;
