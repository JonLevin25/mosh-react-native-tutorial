import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIconType } from "../../utils/typeHelpers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appBackgroundColor, AppColors, AppColorType } from "../../AppStyles";
import ListItem from "./ListItem";
import RoundedIcon from "../RoundedIcon";
import AppText from "../AppText";

type NavigationListItemProps = {
  icon: MaterialCommunityIconType;
  backgroundColor: AppColorType;
  text: string;
};

function NavigationListItem(props: NavigationListItemProps) {
  const { icon, text } = props;
  const styles = getStyles(props);
  return (
    <ListItem
      style={styles.container}
      Icon={
        <RoundedIcon.FromMaterialIcon
          size={40}
          style={styles.image}
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
    image: { backgroundColor: AppColors[props.backgroundColor] },
    text: { color: AppColors.black, fontSize: 16, fontWeight: "500" },
  });

export default NavigationListItem;
