import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppColors } from "../AppStyles";

export default function ViewImageScreen(props: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        resizeMode="contain"
        source={require("../assets/exercise_1/chair.jpg")}
      />
      <MaterialCommunityIcons name="close" style={styles.closeBtn} />
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.deleteBtn}
      />
    </View>
  );
}

const genericStyles = StyleSheet.create({
  iconBtn: {
    fontSize: 35,
    top: 30,
    color: AppColors.white,
    position: "absolute",
  },
});

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  background: {
    // flex: 3,
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
  },
  closeBtn: {
    ...genericStyles.iconBtn,
    // backgroundColor: "#fc5c65",

    left: 15,
  },
  deleteBtn: {
    ...genericStyles.iconBtn,
    // backgroundColor: "#4ecdc4",
    right: 15,
  },
});
