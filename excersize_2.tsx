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
    <View
      style={{
        backgroundColor: "#f8f4f4",
        paddingTop: 100,
        padding: 30,
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/exercise_2/jacket.jpg")}
      />
    </View>
  );
}

export default function App() {
  // return <WelcomeScreen />;
  return <TestCardScreen />;
}
