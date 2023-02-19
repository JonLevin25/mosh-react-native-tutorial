import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { ImageSourcePropType } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconsType } from "../utils/typeHelpers";
import { AppColors } from "../AppStyles";

namespace RoundedIcon {
  type RoundedImageProps = {
    size?: number;
    content: ImageSourcePropType;
    style?: StyleProp<ImageStyle>;
  };

  type RoundedMaterialIconProps = {
    size?: number;
    content: IconsType;
    style?: StyleProp<TextStyle>;
  };

  export function FromImage(props: RoundedImageProps) {
    const size = props.size ?? 70;
    const styles = getStyles(size);
    return (
      <Image style={[styles.common, props.style]} source={props.content} />
    );
  }

  export function FromMaterialIcon(props: RoundedMaterialIconProps) {
    const size = props.size ?? 40;
    const styles = getStyles(size);
    return (
      <MaterialCommunityIcons
        style={[styles.common, styles.text, props.style]}
        name={props.content}
      />
    );
  }

  const getStyles = (size: number) =>
    StyleSheet.create({
      common: {
        marginRight: 10,
        height: size,
        width: size,
        borderRadius: size * 0.5,
      },

      image: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        resizeMode: "contain",
      },
      text: {
        fontSize: size * 0.6,
        textAlign: "center",
        textAlignVertical: "center",
        color: AppColors.white,
      },
    });
}

export default RoundedIcon;
