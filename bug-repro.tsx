import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";
import { AppColors } from "./app/AppStyles";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import WideButton from "./app/components/WideButton";

const jacket = require("./app/assets/exercise_2/jacket.jpg");
const couch = require("./app/assets/exercise_2/couch.jpg");

function Buffer() {
  return <View style={{ height: 50 }} />;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Buffer />
      <Image source={couch} style={styles.image} />
      <Buffer />
      <Image source={couch} style={styles.image} />
      <Buffer />
      <Image source={couch} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,

    borderTopLeftRadius: 10, // this breaks the second image (any specific border will)
    // borderRadius: 10, // this doesn't
  },
});
