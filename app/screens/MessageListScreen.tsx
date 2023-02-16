import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";
import ListSeparator from "../components/ListSeparator";
import AppText from "../components/AppText";

import { messagesData } from "../data/mockData";
import { MessageData } from "../data/MessageData";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../AppStyles";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// flat list, uses messagesData
type DeleteWidgetProps = { msg: MessageData; drag: number };

function DeleteWidget({ msg, drag }: DeleteWidgetProps) {
  const deleteMsg = () => {
    console.log(`Deleting ${msg}!`);
  };
  const maxWidth = styles.deleteContainer.width;
  const width = Math.min(Math.abs(drag), maxWidth);
  return (
    <TouchableOpacity
      // style={[styles.deleteContainer, { width }]}
      style={styles.deleteContainer}
      onPress={deleteMsg}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.trashIcon}
      />
    </TouchableOpacity>
  );
}

function MessageListScreen() {
  return (
    <FlatList
      data={messagesData}
      keyExtractor={(msg) => msg.id} // must be string
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
          onPress={() => console.log(item)}
          renderRightActions={(progress, drag, swipable) => {
            console.log(
              `prog: ${JSON.stringify(progress)} drag: ${JSON.stringify(drag)}`
            );
            return <DeleteWidget drag={drag} msg={item} />;
          }}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    width: 60,
    height: "100%",
    backgroundColor: AppColors.danger,
    alignContent: "center",
    justifyContent: "center",
  },
  trashIcon: {
    alignSelf: "center",
    color: AppColors.white,
    fontSize: 22,
  },
});

export default MessageListScreen;
