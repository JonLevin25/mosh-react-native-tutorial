import { Animated, ViewStyle, StyleProp } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

type RenderFuncType =
  | ((
      progressAnimatedValue: Animated.AnimatedInterpolation<number>,
      dragAnimatedValue: Animated.AnimatedInterpolation<number>,
      swipeable: Swipeable
    ) => React.ReactNode)
  | undefined;

export type ListItemCommonProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  renderRightActions?: RenderFuncType;
};

export type GenericListItemProps = ListItemCommonProps & {
  Icon: React.ReactNode;
  Texts: React.ReactNode | React.ReactNode[];
};
