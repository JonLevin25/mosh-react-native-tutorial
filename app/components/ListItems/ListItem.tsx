import React from "react";
import {
  StyleSheet,
  Animated,
  View,
  TouchableHighlight,
  ViewStyle,
  StyleProp,
  ImageSourcePropType,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../../AppStyles";
import AppText from "../AppText";
import RoundedIcon from "../RoundedIcon";

type RenderFuncType =
  | ((
      progressAnimatedValue: Animated.AnimatedInterpolation<number>,
      dragAnimatedValue: Animated.AnimatedInterpolation<number>,
      swipeable: Swipeable
    ) => React.ReactNode)
  | undefined;

type ListItemPropsCommon = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  renderRightActions?: RenderFuncType;
};

type ListItemProps = {
  Icon: React.ReactNode;
  Texts: React.ReactNode | React.ReactNode[];
};

export function ImageListItem(
  props: ListItemPropsCommon & {
    title: string;
    subTitle?: string;
    image: ImageSourcePropType;
    imageSize?: number;
  }
) {
  const { title, subTitle, image, imageSize, ...otherProps } = props;

  return (
    <ListItem
      Icon={<RoundedIcon.FromImage content={image} size={imageSize ?? 70} />}
      Texts={[
        <AppText color="black" text={title} />,
        subTitle ? <AppText color="black" text={subTitle} /> : undefined,
      ]}
      {...otherProps}
    />
  );
}

function ListItem<T>(props: ListItemProps) {
  const { Icon, Texts, renderRightActions, onPress, style: userStyle } = props;

  const styles = getStyles(true);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        style={[styles.container, undefined]}
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
