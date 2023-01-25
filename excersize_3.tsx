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

const renderItem = ({item}: ListRenderItemInfo<MessageData>): React.ReactElement => {
  const {title, description, image} = item;
  return <ListItem title={title} subtitle={description} image={image}/>
};

export default function App() {
  // return <WelcomeScreen />;
  // return <TestCardScreen />;
  // return <ViewImageScreen />;
  // return <ListingDetailsScreen listing={listingJacket} />;
  return <ScreenContainer>
    <FlatList
    data={messagesData}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    >
    </FlatList>
  </ScreenContainer>
}
