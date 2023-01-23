import { StyleSheet } from "react-native";

export const AppColors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  white: "#fff",
  black: "#000",
};

const textGeneric = {
  fontFamily: "Roboto",
};

export const TextStyles = StyleSheet.create({
  Generic: textGeneric,
  AppText: {
    ...textGeneric,
    color: AppColors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  Subtitle: {
    // used below logo, etc.
    ...textGeneric,
    color: AppColors.black,
    fontSize: 20,
    fontWeight: "700",
    padding: 10,

    textShadowRadius: 1,
  },
});
