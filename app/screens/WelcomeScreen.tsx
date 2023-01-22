import React from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import AppText from "../components/AppText";
import WideButton from "../components/WideButton";

function WelcomeScreen(props: any) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        {/* <View style={styles.contentContainer}/> */}
        <WideButton color="primary" text="Login" />
        <WideButton color="secondary" text="Register" />
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
  logoImg: {
    width: 100,
    height: 100,
  },
  logoTxt: {
    // position: "absolute",
    // top: 100,
    // overflow: 'visible',
  },
  logoContainer: {
    top: 50,
    position: "absolute",
    alignItems: "center",
  },
});

export default WelcomeScreen;
