import React from "react";
import { StyleSheet, View, Image, ImageStyle, ColorValue } from "react-native";
import { ImageSourcePropType } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialCommunityIconType } from "../utils/typeHelpers";

namespace RoundedIcon {
  type ContentType = ImageSourcePropType | MaterialCommunityIconType;
  type RoundedIconProps<T extends ContentType> = {
    content: T;
    size: number;
    backgroundColor?: ColorValue;
  };

  type RoundedImageProps = RoundedIconProps<ImageSourcePropType>;
  type RoundedMaterialIconProps = RoundedIconProps<MaterialCommunityIconType>;

  export function FromImage(props: RoundedImageProps) {
    return <Image style={[styles.common]} source={props.content} />;
  }

  export function FromMaterialIcon(props: RoundedMaterialIconProps) {
    return <MaterialCommunityIcons name={props.content} />;
  }

  const styles = StyleSheet.create({
    common: {
      marginRight: 10,
      resizeMode: "contain",
      height: 70,
      width: 70,
      alignItems: "center",
      borderRadius: 70 * 0.5,
    },
  });
}

export default RoundedIcon;
