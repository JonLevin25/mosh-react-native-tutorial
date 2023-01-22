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

import { AppColors } from "../AppStyles";
import AppText from "./AppText";

function WideButton(
  props: TouchableHighlightProps & {
    text?: string;
    color?: keyof typeof AppColors;
  }
) {
  const { style: userStyle, color, text, children, ...otherProps } = props;

  let userColorStyle;
  if (color && color in AppColors) {
    userColorStyle = { backgroundColor: AppColors[color] };
  }
  //   const allStyles =
  //     style != null ? [styles.buttonContainer, style] : styles.buttonContainer;

  const textComponent = text ? (
    <AppText style={styles.buttonText}>{text}</AppText>
  ) : null;

  return (
    <TouchableHighlight
      {...otherProps}
      style={[styles.buttonContainer, userStyle, userColorStyle]}
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
    width: "90%",
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
