import React from "react";
import { StyleSheet, View, FlatList, Button, Animated } from "react-native";
import ListItem from "../components/ListItems/ListItem";
import ListSeparator from "../components/ListSeparator";
import AppText from "../components/AppText";

import { mockMessages } from "../data/mockData";
import { MessageData } from "../data/MessageData";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../AppStyles";
import AppButton from "../components/AppButton";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";
// flat list, uses messagesData

function MessageListScreen() {
  const [messages, setMessages] = useState(mockMessages);
  const [refreshing, setRefreshing] = useState(false);
  const deleteMsg = (msg: MessageData) => {
    console.log(`deleting msg title: ${msg.title}`);
    const newMessages = messages.filter((m) => m.id != msg.id);
    setMessages(newMessages);
  };

  const mockDataReceived = () => {
    setMessages(mockMessages);
    setRefreshing(false);
  };

  const refresh = () => {
    console.log("refreshing!");
    setRefreshing(true);
    setTimeout(mockDataReceived, 1000);
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(msg) => msg.id} // must be string
      refreshing={refreshing}
      onRefresh={refresh}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
          onPress={() => console.log(item)}
          renderRightActions={(progress, drag, swipable) => {
            return (
              <ListItemDeleteAction
                drag={drag}
                onPress={() => deleteMsg(item)}
              />
            );
          }}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
    ></FlatList>
  );
}

export default MessageListScreen;
