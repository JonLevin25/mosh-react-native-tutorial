import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIconType } from "../../utils/typeHelpers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appBackgroundColor, AppColors, AppColorType } from "../../AppStyles";
import ListItem from "./ListItem";
import RoundedIcon from "../RoundedIcon";
import AppText from "../AppText";
import { ListItemCommonProps } from "./ListItemCommonTypes";

type NavigationListItemProps = ListItemCommonProps & {
  icon: MaterialCommunityIconType;
  color: AppColorType;
  text: string;
  size?: number;
};

function IconListItem(props: NavigationListItemProps) {
  const { icon, text, style: userStyle, size: userSize } = props;
  const styles = getStyles(props);
  const size = userSize ?? 40;
  return (
    <ListItem
      style={styles.container}
      Icon={
        <RoundedIcon.FromMaterialIcon
          size={size}
          style={[styles.image, userStyle]}
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

const getStyles = (props: NavigationListItemProps) =>
  StyleSheet.create({
    container: {},
    image: { backgroundColor: AppColors[props.color] },
    text: { color: AppColors.black, fontSize: 16, fontWeight: "500" },
  });

export default IconListItem;
