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
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../AppStyles";
import { UserData } from "../data/UserData";

import AppText from "./AppText";

type ListItemProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
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
  const { image, title, subtitle, renderRightActions } = props;
  const onPress = props.onPress;

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={styles.container}
        onPress={onPress}
        underlayColor={AppColors.light}
      >
        <>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <AppText color="black" style={styles.title}>
              {title}
            </AppText>
            <AppText color="gray" style={styles.title}>
              {subtitle}
            </AppText>
          </View>
        </>
      </TouchableHighlight>
    </Swipeable>
  );
}

const imageSize = 70;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize * 0.5,
    marginRight: 10,
    resizeMode: "contain",
  },
  detailsContainer: {
    flexDirection: "column",
  },
  title: { fontSize: 20, fontWeight: "500" },
  subTitle: { fontSize: 18, fontWeight: "500" },
});
export default ListItem;
