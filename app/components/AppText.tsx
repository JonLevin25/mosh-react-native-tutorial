import { StyleSheet, Text, TextProps } from "react-native";

import React from "react";
import defaultStyles, {
  AppColors,
  AppColorType,
  appTextColor,
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
      style={[defaultStyles.text, appTextColor(color), userStyle]}
    >
      {text}
    </Text>
  );
}

export default AppText;
