import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { AppColors, AppColorType } from "../AppStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconsType } from "../utils/typeHelpers";

type AppTextInputProps = TextInputProps & {
  icon: IconsType;
  backgroundColor?: AppColorType;
  iconColor?: AppColorType;
  textColor?: AppColorType;
};

function AppTextInput(props: AppTextInputProps) {
  const { icon, style: userStyle, ...otherProps } = props;
  const styles = getStyles(props);
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} style={styles.icon} />
      <TextInput style={[styles.textInput, userStyle]} {...otherProps} />
    </View>
  );
}

const getStyles = ({
  backgroundColor,
  iconColor,
  textColor,
}: AppTextInputProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor ?? AppColors.light,
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderRadius: 30,
    },
    icon: {
      fontSize: 25,
      paddingRight: 10,
      color: iconColor ?? AppColors.gray,
    },
    textInput: {
      fontSize: 20,
      flex: 1,
      color: textColor ?? AppColors.dark,
      // margin: 20,
      //   backgroundColor: "red",
    },
  });

export default AppTextInput;
