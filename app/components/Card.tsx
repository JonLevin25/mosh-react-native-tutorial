import {
  Image,
  Text,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";

import React from "react";
import { useDimensions } from "@react-native-community/hooks";
import AppText from "./AppText";
import { AppColors, TextStyles } from "../AppStyles";
import { ItemData } from "../data/ItemData";

type CardProps = {
  item: ItemData;
};

function Card({ item }: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textPane}>
        <AppText color="black" style={styles.title}>
          {item.title}
        </AppText>
        <AppText color="secondary" style={styles.subTitle}>
          {item.subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 250,
    width: "100%",
    // paddingHorizontal: 25,
    // paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
    // marginHorizontal: 50,
    // alignItems: "center",
    // justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "tomato",
  },
  image: {
    // flex: 2.5,
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  textPane: {
    // flex: 1,
    backgroundColor: AppColors.white,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-evenly",
  },
  title: {
    color: AppColors.black,
    fontSize: 17,
    marginBottom: 7,
    fontWeight: "normal",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
