import { StyleSheet } from "react-native";

export const AppColors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  white: "#fff",
  black: "#000",
};

export const TextStyles = StyleSheet.create({
  AppText: {
    fontFamily: "Roboto",
    color: AppColors.white,
    fontSize: 20,
    fontWeight: "700",
  },
});
