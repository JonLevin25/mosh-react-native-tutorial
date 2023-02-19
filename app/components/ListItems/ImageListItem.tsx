import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  ImageSourcePropType,
} from "react-native";
import RoundedIcon from "../RoundedIcon";
import { AppColors } from "../../AppStyles";
import AppText from "../AppText";
import { UserData } from "../../data/UserData";
import { ListItemCommonProps } from "./ListItemCommonTypes";
import ListItem from "./ListItem";

type ImageListItemProps = ListItemCommonProps & {
  title: string;
  subTitle?: string;
  image: ImageSourcePropType;
  imageSize?: number;
};

function ImageListItem(props: ImageListItemProps) {
  const { title, subTitle, image, imageSize: _size, ...otherProps } = props;
  const imageSize = _size ?? 70;
  return (
    <ListItem
      Icon={<RoundedIcon.FromImage content={image} size={imageSize} />}
      Texts={[
        <AppText color="black" text={title} style={styles.title} />,
        subTitle ? (
          <AppText color="gray" text={subTitle} style={styles.subTitle} />
        ) : undefined,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {},
  title: { fontSize: 18, fontWeight: "500" },
  subTitle: { fontSize: 16, fontWeight: "400" },
});

export default ImageListItem;
