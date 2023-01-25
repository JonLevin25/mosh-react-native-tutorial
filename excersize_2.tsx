import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";
import { AppColors } from "./app/AppStyles";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import TestCardScreen from "./app/screens/TestCardScreen";

import { itemJacket, listingJacket, userMosh } from "./app/data/mockData";

export default function App() {
  // return <WelcomeScreen />;
  // return <TestCardScreen />;
  return <ListingDetailsScreen listing={listingJacket} />;
}
