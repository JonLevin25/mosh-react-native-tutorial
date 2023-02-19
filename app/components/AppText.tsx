import { StyleSheet, Text, TextProps } from "react-native";

import React from "react";
import {
  AppColors,
  AppColorType,
  appTextColor,
  TextStyles,
} from "../AppStyles";

type AppTextProps = TextProps & {
  text: string;
  color?: AppColorType;
};
function AppText({
  text,
  style: userStyle,
  color,
  ...otherProps
}: AppTextProps) {
  return (
    <Text
      {...otherProps}
      key={text} // before otherprops, so key can be overriden
      style={[TextStyles.AppText, userStyle, appTextColor(color)]}
    >
      {text}
    </Text>
  );
}

export default AppText;
