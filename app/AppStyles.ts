import { StyleSheet } from "react-native";

export const AppColors = {
  black: "#000",
  gray: "#6e6969",
  light: "#f8f4f4",
  medium: "#6e6969",
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  white: "#fff",
};

type MaybeAppColor = keyof typeof AppColors | undefined;

export function appBackgroundColor(bgColor: MaybeAppColor) {
  if (bgColor == null) return {};
  return { backgroundColor: AppColors[bgColor] };
}

export function appTextColor(textColor: MaybeAppColor) {
  if (textColor == null) return {};
  return { color: AppColors[textColor] };
}

export function resolveTextColor(bgColor: keyof typeof AppColors): {
  color?: string;
} {
  if (bgColor && bgColor in AppColors) {
    return { color: AppColors[bgColor] };
  }

  return {};
}

export const TextStyles = StyleSheet.create({
  AppText: {
    color: AppColors.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
