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
    backgroundColor: AppColors.primary,
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
