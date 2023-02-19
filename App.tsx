import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, StyleSheet, ListRenderItemInfo, View } from "react-native";

// screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ScreenContainer from "./app/screens/ScreenContainer";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageListScreenApp from "./app/screens/MessageListScreen";
import TestCardScreen from "./app/screens/TestCardScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageListScreen from "./app/screens/MessageListScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

// data/config
import { AppColors } from "./app/AppStyles";
import { listingJacket } from "./app/data/mockData";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    <ScreenContainer style={styles.container}>
      {/* <View
        style={{
          backgroundColor: "dodgerblue",
          // flex: 1,
          height: "100%",
          width: "100%",
        }}
      /> */}

      {/* <WelcomeScreen /> */}
      {/* <TestCardScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetailsScreen listing={listingJacket} /> */}
      {/* <MessageListScreen /> */}
      {/* <MyAccountScreen /> */}
      <ListingsScreen />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flex: 1 works on this, but children need w/h: 100%. Is it because GestureHandlerRootView fills up screen?
    // height: "100%",
    // width: "100%",
    // backgroundColor: "dodgerblue",
  },
});
