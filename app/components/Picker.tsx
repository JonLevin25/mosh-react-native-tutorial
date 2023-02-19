import React, { useState } from "react";
import {
  Button,
  FlatListProps,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { AppColors, AppColorType } from "../AppStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconsType } from "../utils/typeHelpers";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

type PickerProps<T> = FlatListProps<T> & {
  selectedItem: T;
  renderSelected: (item: T) => React.ReactNode;
  onItemSelected?: (selectedItem: T) => void;
};

function Picker<T>(props: PickerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const { renderItem: userRenderItem, ...otherProps } = props;
  const styles = getStyles(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressSelected}
        style={styles.selectedContainer}
      >
        {props.renderSelected(props.selectedItem)}
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );

  function renderDropdown() {
    if (!isOpen) return undefined;

    if (userRenderItem == null) return;

    // if open - Render flatlist with buttons that close it
    return (
      <FlatList
        {...otherProps} // includes data/etc.
        renderItem={(info) => (
          <TouchableOpacity
            onPress={() => onPressDropdown(info.item)}
            style={styles.itemContainer}
          >
            {userRenderItem(info)}
          </TouchableOpacity>
        )}
      />
    );
  }

  function onPressSelected() {
    setIsOpen(!isOpen);
    console.log(
      `Press selected item [isOpen: ${isOpen}] (${JSON.stringify(
        props.selectedItem
      )})`
    );
  }

  function onPressDropdown(item: T) {
    console.log(`Dropdown press: ${JSON.stringify(item)}`);
    props.onItemSelected?.(item);
    setIsOpen(false);
  }
}

function getStyles<T>(props: PickerProps<T>) {
  return StyleSheet.create({
    container: {},
    itemContainer: {},
    selectedContainer: {},
  });
}

export default Picker;
