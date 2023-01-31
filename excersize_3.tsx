import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
  ScrollView,
  FlatList,
  ImageSourcePropType,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";

import { AppColors } from "./app/AppStyles";
import { itemJacket, listingJacket, userMosh, messagesData } from "./app/data/mockData";
import ScreenContainer from "./app/screens/ScreenContainer";
import ListItem from './app/components/ListItem';
import { MessageData } from "./app/data/MessageData";
import ListSeparator from "./app/components/ListSeparator";

export default function App() {
  
  return <ScreenContainer>
    {/* <WelcomeScreen />; */}
    {/* <TestCardScreen />; */}
    {/* <ViewImageScreen />; */}
    {/* <ListingDetailsScreen listing={listingJacket} />; */}
    <FlatList
    data={messagesData}
    renderItem={({item}) => 
      (<ListItem
        renderRightActions={() => <View style={{backgroundColor:"tomato", width: 70}}/>}
        onPress={() => console.log(`onPress ${item}`)}
      title={item.title} subtitle={item.description} image={item.image}/>)}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <ListSeparator/>}>)
    </FlatList>
  </ScreenContainer>
}
