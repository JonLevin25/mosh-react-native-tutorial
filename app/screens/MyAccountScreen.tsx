import { StyleSheet, View, Image, Text, SectionList } from "react-native";
import "../components/AppText";
import { AppColors } from "../AppStyles";
import React from "react";
import ListItem from "../components/ImageListItem";
import { userMosh } from "../data/mockData";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
type ButtonData = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};
const buttonsData: ButtonData[] = [
  { icon: "format-list-bulleted", title: "My Listings" },
  { icon: "email", title: "My Messages" },
];
const logoutButton = { icon: "logout", title: "Logout" };

function MyAccountScreen() {
  return (
    <View style={styles.container}>
      <ListItem
        style={styles.userCard}
        image={userMosh.profileImage}
        title={userMosh.name}
        subtitle={userMosh.email}
      />
      <View style={{ height: 40 }} />
      {/* <FlatList data={buttonsData}
      renderItem={({item}) => } */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  userCard: { marginBottom: 50 },
});
export default MyAccountScreen;
