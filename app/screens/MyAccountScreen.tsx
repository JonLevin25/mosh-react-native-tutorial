import { StyleSheet, View, Image, Text, SectionList } from "react-native";
import "../components/AppText";
import { AppColors } from "../AppStyles";
import React from "react";
import ListItem from "../components/ListItem";
import { userMosh } from "../data/mockData";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIconType } from "../utils/typeHelpers";
import RoundedIcon from "../components/RoundedIcon";
type ButtonData = {
  title: string;
  icon: MaterialCommunityIconType;
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
        Icon={
          <RoundedIcon.FromImage size={70} content={userMosh.profileImage} />
        }
        Texts={[
          <Text style={styles.title} key={userMosh.name}>
            {userMosh.name}
          </Text>,
          <Text style={styles.subTitle} key={userMosh.email}>
            {userMosh.email}
          </Text>,
        ]}
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
  image: {},
  title: { color: AppColors.black, fontSize: 18, fontWeight: "400" },
  subTitle: { color: AppColors.gray, fontSize: 16, fontWeight: "400" },
});
export default MyAccountScreen;
