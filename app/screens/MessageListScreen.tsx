import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Animated,
} from "react-native";
import ListItem from "../components/ListItem";
import ListSeparator from "../components/ListSeparator";
import AppText from "../components/AppText";

import { messagesData } from "../data/mockData";
import { MessageData } from "../data/MessageData";
import { Swipeable } from "react-native-gesture-handler";
import { AppColors } from "../AppStyles";
import AppButton from "../components/AppButton";
import { DeleteWidget } from "./DeleteWidget";
import {useState} from 'react';
// flat list, uses messagesData

function MessageListScreen() {
  const [messages, setMessages] = useState(messagesData);
    const deleteMsg = (msg: MessageData) => {
    console.log(`deleting msg title: ${msg.title}`);r
    setMessages(messagesData.filter(m => m != msg));
  };

  return (
    <FlatList
      data={messages}
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
            return <DeleteWidget drag={drag} onPress={()=> deleteMsg(item)} />;
          }}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
    ></FlatList>
  );
}


export default MessageListScreen;
