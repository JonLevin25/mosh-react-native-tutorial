import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { IconsType } from "../../utils/typeHelpers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appBackgroundColor, AppColors, AppColorType } from "../../AppStyles";
import ListItem from "./ListItem";
import RoundedIcon from "../RoundedIcon";
import AppText from "../AppText";
import { ListItemCommonProps } from "./ListItemCommonTypes";

type IconListItemProps = ListItemCommonProps & {
  icon: IconsType;
  color: AppColorType;
  text: string;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

function IconListItem(props: IconListItemProps) {
  const { icon, text, containerStyle, size: userSize } = props;
  const styles = getStyles(props);
  const size = userSize ?? 40;
  return (
    <ListItem
      style={[styles.container, containerStyle]}
      Icon={
        <RoundedIcon.FromMaterialIcon
          size={size}
          style={[styles.image]}
          content={icon}
        />
      }
      Texts={[
        // func call means <Text> is returned, with key set properly
        AppText({ text, style: styles.text }),
      ]}
    />
  );
}

const getStyles = (props: IconListItemProps) =>
  StyleSheet.create({
    container: {},
    image: { backgroundColor: AppColors[props.color] },
    text: { color: AppColors.black, fontSize: 16, fontWeight: "500" },
  });

export default IconListItem;
