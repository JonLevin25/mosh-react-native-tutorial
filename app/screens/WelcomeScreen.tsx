import React from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import { TextStyles } from "../AppStyles";
import AppText from "../components/AppText";
import WideButton from "../components/WideButton";

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
        source={require("../assets/background.jpg")}
      >
        {/* <View style={styles.contentContainer}/> */}
        <WideButton
          text="Login"
          color="primary"
          onPress={onLoginPress}
          style={styles.button}
        />
        <WideButton
          text="Register"
          color="secondary"
          onPress={onRegisterPress}
          style={styles.button}
        />
        <View style={styles.bottomBuffer} />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.logoTxt}>Sell what you don't need!</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: { margin: 10 },
  bottomBuffer: { margin: 10 },

  logoImg: {
    width: 100,
    height: 100,
  },
  logoTxt: {
    ...TextStyles.Subtitle,
  },
  logoContainer: {
    top: 50,
    position: "absolute",
    alignItems: "center",
  },
});

export default WelcomeScreen;
