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

type ListingProps = {
  listing: ListingData;
};

function ListingDetailsScreen({ listing: { user, item } }: ListingProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.listingImage} source={item.image} />
      <AppText color="black" style={styles.listingTitle}>
        {item.title}
      </AppText>
      <AppText color="secondary" style={styles.listingSubtitle}>
        {item.subTitle}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", backgroundColor: AppColors.white },
  listingImage: { width: "100%", height: 250, resizeMode: "contain" },
  listingTitle: { fontSize: 25, fontWeight: "700" },
  listingSubtitle: { fontSize: 20, fontWeight: "700" },
});

export default ListingDetailsScreen;
