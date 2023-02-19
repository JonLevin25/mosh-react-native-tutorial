import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { AppColors } from "../AppStyles";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import IconListItem from "../components/ListItems/IconListItem";
import { Icon, IconsType } from "../utils/typeHelpers";

type DropdownItemType = { icon: IconsType; text: string };
const dropDownItems: DropdownItemType[] = [
  { icon: "hamburger", text: "Update" },
  { icon: "bookmark", text: "Food/Medicine" },
  { icon: "bookmark", text: "Emotional" },
  { icon: "bookmark", text: "Custom" },
];

function TestTextInputScreen() {
  const [firstName, setFirstName] = useState("");
  const [selectedItem, setSelectedItem] = useState(dropDownItems[0]);
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <AppPicker<DropdownItemType>
        data={dropDownItems}
        renderSelected={(item) => <IconListItem {...item} color="yellow" />}
        renderItem={({ item }) => <IconListItem {...item} color="yellow" />}
        selectedItem={selectedItem}
        onItemSelected={(item) => setSelectedItem(item)}
      />
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
