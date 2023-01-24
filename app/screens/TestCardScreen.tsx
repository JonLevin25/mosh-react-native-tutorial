import React from "react";
import { View } from "react-native";

import Card from "../components/Card";

export default function TestCardScreen(props: any) {
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
        image={require("../assets/exercise_2/jacket.jpg")}
      />
    </View>
  );
}
