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

function WideButton(props: TouchableHighlightProps) {
  const { style, children, ...otherProps } = props;
  //   const allStyles =
  //     style != null ? [styles.buttonContainer, style] : styles.buttonContainer;

  return (
    <TouchableHighlight {...otherProps} style={[styles.buttonContainer, style]}>
      <View>{children}</View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    borderRadius: 100,
    backgroundColor: AppColors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WideButton;
