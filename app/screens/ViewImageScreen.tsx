import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";

export default function ViewImageScreen(props: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        resizeMode="contain"
        source={require("../assets/exercise_1/chair.jpg")}
      />
      <View style={styles.closeBtn} />
      <View style={styles.deleteBtn} />
    </View>
  );
}

const genericStyles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    top: 40,
    position: "absolute",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    width: "100%",
  },
  background: {
    // flex: 3,
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
  },
  closeBtn: {
    ...genericStyles.btn,
    backgroundColor: "#fc5c65",
    left: 15,
  },
  deleteBtn: {
    ...genericStyles.btn,
    backgroundColor: "#4ecdc4",
    right: 15,
  },
});
