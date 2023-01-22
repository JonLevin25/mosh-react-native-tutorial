import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { AppColors } from "./app/AppStyles";
import AppText from "./app/components/AppText";
import WideButton from "./app/components/WideButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WideButton color="primary" onPress={() => console.log("")}>
        <AppText>Test</AppText>
      </WideButton>
      {/* <TouchableHighlight
        onPress={() => console.log("press!")}
        style={{
          backgroundColor: AppColors.primary,
          width: "100%",
          height: 50,
        }}
      > */}
      {/* <View></View>
      </TouchableHighlight> */}
    </View>
  );
}
