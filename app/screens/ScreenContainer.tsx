import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  ViewStyle,
} from "react-native";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type ScreenContainerProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
};

function ScreenContainer({ children, style }: ScreenContainerProps) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight, // on ios - should be a no-op compared to regular SafeAreaView
    // backgroundColor: "red",
    flex: 1,
  },
});

export default ScreenContainer;
