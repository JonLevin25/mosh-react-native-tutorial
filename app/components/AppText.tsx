import { StyleSheet, Text, TextProps } from "react-native";

import React from "react";
import { TextStyles } from "../AppStyles";

function AppText(props: TextProps) {
  const { style: userStyle, children, ...otherProps } = props;
  return (
    <Text {...otherProps} style={[TextStyles.AppText, userStyle]}>
      {children}
    </Text>
  );
}

export default AppText;
