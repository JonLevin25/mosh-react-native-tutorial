import React from "react";
import {
  StyleSheet,
  Animated,
  View,
  Image,
  ImagePropsBase,
  ImageSourcePropType,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../AppStyles";
import { UserData } from "../data/UserData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

type ListItemProps = {
  Icon: React.ReactNode;
  Texts: React.ReactNode[];
  style?: ViewStyle;
  onPress?: () => void;
  renderRightActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation<number>,
        dragAnimatedValue: Animated.AnimatedInterpolation<number>,
        swipeable: Swipeable
      ) => React.ReactNode)
    | undefined;
};

function ListItem<T>(props: ListItemProps) {
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
  const padding = 20;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: padding,
      // height: imageSize + padding,
      alignItems: "center",
      backgroundColor: AppColors.white,
    },
    detailsContainer: {
      height: "100%",
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
