import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { AppColors, AppColorType } from "../AppStyles";
import Picker from "../components/Picker";
import AppTextInput from "../components/AppTextInput";
import IconListItem from "../components/ListItems/IconListItem";
import ListSeparator from "../components/ListSeparator";
import { Icon, IconsType } from "../utils/typeHelpers";
import AppPicker from "../components/AppPicker";
import { dropDownItems } from "../data/mockData";

function TestTextInputScreen() {
  const [selectedItem, setSelectedItem] = useState(dropDownItems[0]);
  return (
    <View style={styles.container}>
      <AppPicker data={dropDownItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor: "dodgerblue",
  },
});
export default TestTextInputScreen;
