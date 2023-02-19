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

type AppPickerProps<T> = FlatListProps<T> & {
  //   icon: IconsType;
  //   backgroundColor?: AppColorType;
  //   iconColor?: AppColorType;
  //   textColor?: AppColorType;
  selectedItem: T;
  renderSelected: (item: T) => React.ReactNode;
  onItemSelected?: (selectedItem: T) => void;
};

function AppPicker<T>(props: AppPickerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const { style: userStyle, renderItem: userRenderItem, ...otherProps } = props;
  const styles = getStyles(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSelected}>
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

function getStyles<T>(props: AppPickerProps<T>) {
  return StyleSheet.create({
    container: {},
    itemContainer: {},
    selectedField: {
      //   backgroundColor: backgroundColor ?? AppColors.light,
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderRadius: 30,
    },
    icon: {
      fontSize: 25,
      paddingRight: 10,
      //   color: iconColor ?? AppColors.gray,
    },
    textInput: {
      fontSize: 20,
      flex: 1,
      //   color: textColor ?? AppColors.dark,
      // margin: 20,
      //   backgroundColor: "red",
    },
  });
}

export default AppPicker;
