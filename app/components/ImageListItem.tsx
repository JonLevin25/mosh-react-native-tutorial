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

import AppText from "./AppText";

type ListItemProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
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
  const {
    image,
    title,
    subtitle,
    renderRightActions,
    style: userStyle,
  } = props;
  const onPress = props.onPress;
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={[styles.container, userStyle]}
        onPress={onPress}
        underlayColor={AppColors.light}
      >
        <View style={styles.contentContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <AppText color="black" style={styles.title}>
              {title}
            </AppText>
            <AppText color="gray" style={styles.subTitle}>
              {subtitle}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    height: 90,
    alignSelf: "center",
    backgroundColor: AppColors.white,
  },
  contentContainer: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "blue",
  },
  image: {
    marginRight: 10,
    resizeMode: "contain",
    height: 70,
    width: 70,
    alignItems: "center",
    borderRadius: 70 * 0.5,
  },
  detailsContainer: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  title: { fontSize: 18, fontWeight: "400" },
  subTitle: { fontSize: 16, fontWeight: "400" },
});
export default ListItem;
