import { StyleSheet } from "react-native";

export const AppColors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  white: "#fff",
  black: "#000",
};

type MaybeAppColor = keyof typeof AppColors | undefined;


export function appBackgroundColor(bgColor: MaybeAppColor)
{
    if (bgColor == null) return {};
    return { backgroundColor: AppColors[bgColor] };
}

export function appTextColor(textColor: MaybeAppColor)
{
  if (textColor == null) return {};
  return { color: AppColors[textColor] };
}

export function resolveTextColor(bgColor: keyof typeof AppColors): { color?: string }
{
  if (bgColor && bgColor in AppColors) {
    return { color: AppColors[bgColor] };
  }

  return {};
}

const textGeneric = {
  // fontFamily: "Roboto",
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
    fontSize: 25,
    fontWeight: "700",
    padding: 10,

    textShadowRadius: 1,
  },
});
