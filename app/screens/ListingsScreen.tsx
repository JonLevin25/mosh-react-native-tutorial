import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AppColors } from "../AppStyles";
import Card from "../components/Card";
import { listingCouch, listingJacket } from "../data/mockData";

const listings = [listingJacket, listingCouch];

function ListingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        renderItem={({ item: listing }) => <Card item={listing.item} />}
        keyExtractor={(listing) => listing.id}
        style={styles.listings}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: AppColors.light,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  listings: {
    width: "100%",
  },
});
export default ListingsScreen;
