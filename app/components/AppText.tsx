import { StyleSheet, Text, TextProps } from "react-native";

import React from "react";
import { AppColors, appTextColor, TextStyles } from "../AppStyles";

function AppText(props: TextProps & {color: keyof typeof AppColors}) {
  const { style: userStyle, color, children, ...otherProps } = props;
  return (
    <Text {...otherProps} style={[TextStyles.AppText, userStyle, appTextColor(color)]}>
      {children}
    </Text>
  );
}

export default AppText;
