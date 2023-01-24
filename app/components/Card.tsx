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

function Card(props: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.textPane}>
        <AppText color="black" style={styles.title}>
          {props.title}
        </AppText>
        <AppText color="secondary" style={styles.subTitle}>
          {props.subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 250,
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    flex: 2.5,
    // height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  textPane: {
    flex: 1,
    backgroundColor: AppColors.white,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-evenly",
  },
  title: {
    color: AppColors.black,
    fontSize: 17,
    fontWeight: "normal",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
