import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { MessageData } from "../data/MessageData";
import { AppColors } from "../AppStyles";

export type DeleteWidgetProps = {
  drag: number;
  onPress: () => void;
};

export default function ListItemDeleteAction(props: DeleteWidgetProps) {
  const { drag, onPress } = props;
  // const maxWidth = styles.deleteContainer.width;
  // const width = Math.min(Math.abs(drag), maxWidth);
  return (
    <TouchableOpacity
      // style={[styles.deleteContainer, { width }]}
      style={[styles.deleteContainer]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.trashIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    width: 59,
    height: "100%",
    backgroundColor: AppColors.danger,
    alignContent: "center",
    justifyContent: "center",
  },
  trashIcon: {
    alignSelf: "center",
    color: AppColors.white,
    fontSize: 25,
  },
});
