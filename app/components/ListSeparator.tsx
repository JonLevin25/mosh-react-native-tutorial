import { StyleSheet, View } from "react-native";
import React from "react";
import { AppColors, defaultStyles } from "../AppStyles";

type ListSeparatorProps = {};
function ListSeparator(props: ListSeparatorProps) {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: AppColors.light,
  },
});
export default ListSeparator;
