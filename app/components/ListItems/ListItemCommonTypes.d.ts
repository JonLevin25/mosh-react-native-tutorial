import { Animated, ViewStyle, StyleProp, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

type RenderFuncType =
  | ((
      progressAnimatedValue: Animated.AnimatedInterpolation<number>,
      dragAnimatedValue: Animated.AnimatedInterpolation<number>,
      swipeable: Swipeable
    ) => React.ReactNode)
  | undefined;

export type ListItemCommonProps = {
  onPress?: () => void;
  renderRightActions?: RenderFuncType;
};

export type GenericListItemProps = ListItemCommonProps & {
  Icon: React.ReactNode;
  style: StyleProp<ViewStyle>;
  Texts: React.ReactNode | React.ReactNode[];
};
