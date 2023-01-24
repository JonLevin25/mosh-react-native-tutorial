import React from "react";
import { View } from "react-native";

import Card from "../components/Card";
import { itemJacket } from "../data/mockData";

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
      <Card item={itemJacket} />
    </View>
  );
}
