import React from "react";
import {
  ButtonProps,
  StyleSheet,
  Button,
  View,
  ViewStyle,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

import { AppColors, appBackgroundColor } from "../AppStyles";
import AppText from "./AppText";

function WideButton(
  props: TouchableHighlightProps & {
    text?: string;
    color?: keyof typeof AppColors;
  }
) {
  const { style: userStyle, color, text, children, ...otherProps } = props;
  const textComponent = text ? (
    <AppText style={styles.buttonText}>{text}</AppText>
  ) : null;

  return (
    <TouchableHighlight
      {...otherProps}
      style={[styles.buttonContainer, userStyle, appBackgroundColor(color)]}
    >
      <View>
        {textComponent}
        {children}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    padding: 10,
    height: 50,
    borderRadius: 100,
    backgroundColor: AppColors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
  },
});

export default WideButton;
