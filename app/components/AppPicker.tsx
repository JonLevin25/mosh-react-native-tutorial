import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppColors, AppColorType } from "../AppStyles";
import Picker from "./Picker";
import IconListItem from "./ListItems/IconListItem";
import ListSeparator from "./ListSeparator";
import { IconsType } from "../utils/typeHelpers";

type DropdownItemType = { icon: IconsType; color: AppColorType; text: string };

type AppPickerProps = {
  data: DropdownItemType[];
  onItemSelected?: (selectedItem: DropdownItemType) => void;
};

function AppPicker(props: AppPickerProps) {
  const { data, onItemSelected } = props;
  const [selectedItem, setSelectedItem] = useState(data[0]);
  return (
    <Picker
      data={data}
      style={styles.dropdownContainer}
      keyExtractor={(item) => item.text}
      renderSelected={(item) => (
        <IconListItem
          {...item}
          color={item.color}
          containerStyle={styles.selected}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      renderItem={({ item }) => (
        <IconListItem
          {...item}
          color={item.color}
          containerStyle={styles.item}
        />
      )}
      selectedItem={selectedItem}
      onItemSelected={onSelected}
    />
  );

  function onSelected(item: DropdownItemType) {
    setSelectedItem(item);
    if (onItemSelected) onItemSelected(item);
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: AppColors.light,
    borderColor: AppColors.primary,

    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 20,
  },
  dropdownContainer: {
    backgroundColor: AppColors.white,
    marginHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 4,
  },
  item: {
    marginHorizontal: 20,
    width: 100,
  },
});
export default AppPicker;
