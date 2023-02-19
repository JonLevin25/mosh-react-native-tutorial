import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../../AppStyles";
import AppText from "../AppText";
import RoundedIcon from "../RoundedIcon";
import { GenericListItemProps } from "./ListItemCommonTypes";

function ListItem<T>(props: GenericListItemProps) {
  const { Icon, Texts, renderRightActions, onPress, style: userStyle } = props;

  const styles = getStyles(true);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={[styles.container, userStyle]}
        onPress={onPress}
        underlayColor={AppColors.light}
      >
        <View style={styles.contentContainer}>
          {Icon}
          <View style={styles.detailsContainer}>{Texts}</View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const getStyles = (isDoubleRow: boolean) => {
  const padding = 10;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: padding,
      // height: imageSize + padding,
      alignItems: "center",
      backgroundColor: AppColors.white,
    },
    detailsContainer: {
      flexDirection: "column",
      justifyContent: "center",
      // backgroundColor: "green",
    },
    contentContainer: {
      // height: imageSize,
      width: "100%",
      flexDirection: "row",
      // backgroundColor: "blue",
    },
  });
};

export default ListItem;
