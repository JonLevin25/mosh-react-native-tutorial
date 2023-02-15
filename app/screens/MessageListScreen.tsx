import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListSeparator from "../components/ListSeparator";
import AppText from "../components/AppText";
const styles = StyleSheet.create({});

import { messagesData } from "../data/mockData";

// flat list, uses messagesData

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
        />
      )}
    ></FlatList>
  );
}

export default MessageListScreen;
