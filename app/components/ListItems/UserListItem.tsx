import React from "react";
import { Text, StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import ListItem from "./ListItem";
import RoundedIcon from "../RoundedIcon";
import { AppColors } from "../../AppStyles";
import AppText from "../AppText";
import { UserData } from "../../data/UserData";

type UserListItemProps = {
  user: UserData;
  subTitle: string;
  style?: StyleProp<ViewStyle>;
};

function UserListItem({ user, subTitle, style: userStyle }: UserListItemProps) {
  return (
    <ListItem
      style={[styles.container, userStyle]}
      Icon={<RoundedIcon.FromImage size={70} content={user.profileImage} />}
      Texts={[
        // func call means <Text> is returned, with key set
        AppText({ text: user.name, style: styles.title }),
        AppText({ text: subTitle, style: styles.subTitle }),
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {},
  title: { color: AppColors.black, fontSize: 18, fontWeight: "500" },
  subTitle: { color: AppColors.gray, fontSize: 16, fontWeight: "400" },
});
export default UserListItem;
