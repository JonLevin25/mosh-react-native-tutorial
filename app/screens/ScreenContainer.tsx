import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type ScreenContainerProps = {
  children?: React.ReactNode;
};

function ScreenContainer({ children }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight, // on ios - should be a no-op compared to regular SafeAreaView
  },
});

export default ScreenContainer;
