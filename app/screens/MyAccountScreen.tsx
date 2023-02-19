import { StyleSheet, View } from "react-native";
import "../components/AppText";
import React from "react";
import { userMosh } from "../data/mockData";
import { MaterialCommunityIconType } from "../utils/typeHelpers";
import UserListItem from "../components/ListItems/UserListItem";
import NavigationListItem from "../components/ListItems/NavigationListItem";
import { FlatList } from "react-native-gesture-handler";
import ListSeparator from "../components/ListSeparator";
import { AppColorType } from "../AppStyles";
type ButtonData = {
  title: string;
  icon: MaterialCommunityIconType;
  color: AppColorType;
};
const buttonsData: ButtonData[] = [
  { icon: "format-list-bulleted", title: "My Listings", color: "primary" },
  { icon: "email", title: "My Messages", color: "secondary" },
];
const logoutButton: ButtonData = {
  icon: "logout",
  title: "Logout",
  color: "yellow",
};

function renderNavigationButton(data: ButtonData) {
  return (
    <NavigationListItem
      text={data.title}
      icon={data.icon}
      backgroundColor={data.color}
    />
  );
}

function MyAccountScreen() {
  return (
    <View style={styles.container}>
      <UserListItem user={userMosh} style={styles.userListItem} />
      {/* <UserListItem user={userMosh} /> */}
      <View style={{ height: 40 }} />
      <FlatList
        style={styles.flatList}
        data={buttonsData}
        ItemSeparatorComponent={ListSeparator}
        renderItem={({ item }) => renderNavigationButton(item)}
      />
      <View style={{ height: 20 }} />
      {renderNavigationButton(logoutButton)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  userListItem: {},
  flatList: { flexGrow: 0 },
});

export default MyAccountScreen;
