import { Platform, StyleSheet } from "react-native";

export const AppColors = {
  gray: "#6e6969",
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  light: "#f8f4f4",
  medium: "#6e6969",
  dark: "0c0c0c",
  danger: "#ff5252",
  yellow: "#ffe66d",
};

export type AppColorType = keyof typeof AppColors;
export type MaybeAppColor = AppColorType | undefined;

export function appBackgroundColor(bgColor: MaybeAppColor) {
  if (bgColor == null) return {};
  return { backgroundColor: AppColors[bgColor] };
}

export function appTextColor(textColor: MaybeAppColor) {
  if (textColor == null) return {};
  return { color: AppColors[textColor] };
}

const defaultStyles = StyleSheet.create({
  text: {
    color: AppColors.dark,
    fontSize: 18,
    // fontWeight: "700",
    fontFamily: Platform.select({
      android: "Roboto",
      ios: "Avenir",
    }),
  },
});

export default defaultStyles;
