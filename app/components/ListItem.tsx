import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImagePropsBase,
  ImageSourcePropType,
} from "react-native";
import { UserData } from "../data/UserData";

import AppText from "./AppText";

type ListItemProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

function ListItem({ image, title, subtitle }: ListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText color="black" style={styles.title}>
          {title}
        </AppText>
        <AppText color="gray" style={styles.title}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}

const imageSize = 70;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
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
