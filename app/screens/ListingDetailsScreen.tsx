import {
  StyleSheet,
  Image,
  View,
  ImagePropsBase,
  ImageSourcePropType,
} from "react-native";
import AppText from "../components/AppText";
import { TextStyles, AppColors } from "../AppStyles";
import React from "react";
import { ListingData as ItemData, ListingData } from "../data/ListingData";
import { UserData } from "../data/UserData";
import { userMosh } from "../data/mockData";

import ListItem from "../components/ImageListItem";

type ListingProps = {
  listing: ListingData;
};

function ListingDetailsScreen({ listing: { user, item } }: ListingProps) {
  return (
    <View>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText color="black" style={styles.title}>
          {item.title}
        </AppText>
        <AppText color="secondary" style={styles.price}>
          {item.getPriceStr()}
        </AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={user.profileImage}
          title={user.name}
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: { width: "100%", height: 300 },
  title: { fontSize: 24, fontWeight: "500" },
  userContainer: { marginVertical: 40 },
  price: { fontSize: 20, marginVertical: 10, fontWeight: "700" },
});

export default ListingDetailsScreen;
