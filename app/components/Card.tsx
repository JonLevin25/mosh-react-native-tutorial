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

type CardProps = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
};

const borderRadius = 10;
function Card(props: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.textPane}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 250,
    margin: 20,
  },
  image: {
    // flex: 2.5,
    height: 200,
    width: "100%",
    resizeMode: "cover",
    // opacity: 0.2,
    // backgroundColor: "green",
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  textPane: {
    // flex: 1,
    backgroundColor: AppColors.white,
    width: "100%",
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-evenly",
  },
  title: {
    ...TextStyles.Generic,
    color: AppColors.black,
    backgroundColor: "tomato",
    fontSize: 17,
    fontWeight: "normal",
  },
  subTitle: {
    ...TextStyles.Generic,
    fontSize: 16,
    color: "#74cac3",
    fontWeight: "bold",
  },
});

export default Card;
