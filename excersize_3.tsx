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
import {
  itemJacket,
  listingJacket,
  userMosh,
  messagesData,
} from "./app/data/mockData";
import ScreenContainer from "./app/screens/ScreenContainer";
import ListItem from "./app/components/ImageListItem";
import { MessageData } from "./app/data/MessageData";
import ListSeparator from "./app/components/ListSeparator";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageListScreen from "./app/screens/MessageListScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

export default function App() {
  return (
    <ScreenContainer style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <TestCardScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetailsScreen listing={listingJacket} /> */}
      {/* <MessageListScreen /> */}
      <MyAccountScreen />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: AppColors.light },
});
