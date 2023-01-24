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
import AppButton from "./app/components/AppButton";

import Card from "./app/components/Card";

const borderRadius = 10;
function TestCardScreen(props: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#f8f4f4",
          height: "45%",
          paddingTop: 40,
        }}
      >
        <Card
          title="Red jacket for sale!"
          subTitle="$100"
          image={require("./app/assets/exercise_2/jacket.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 2,
    // width: "100%"
    width: "90%",
    height: 250,
    resizeMode: "cover",
    // opacity: 0.2,
    // backgroundColor: "green",
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
});

export default function App() {
  return <WelcomeScreen />;
  // return <TestCardScreen />;
}
