import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

import { AppColors, appBackgroundColor } from "../AppStyles";
import AppText from "./AppText";

function AppButton(
  props: TouchableHighlightProps & {
    text?: string;
    color?: keyof typeof AppColors;
  }
) {
  const { style: userStyle, color, text, ...otherProps } = props;
  return (
    <TouchableHighlight
      {...otherProps}
      style={[styles.buttonContainer, userStyle, appBackgroundColor(color)]}
    >
      <AppText style={styles.buttonText}>{text}</AppText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    pading: 15,
    backgroundColor: AppColors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
  },
});

export default AppButton;
