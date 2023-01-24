import { ItemData } from "./ItemData";
import { ListingData } from "./ListingData";
import { UserData } from "./UserData";

export const userMosh: UserData = {
  name: "Mosh Hamedani",
  profileImage: require("../assets/exercise_2/mosh.jpg"),
};

export const itemJacket: ItemData = {
  image: require("../assets/exercise_2/jacket.jpg"),
  title: "Red jacket for sale!",
  subTitle: "100$",
};

export const listingJacket: ListingData = {
  user: userMosh,
  item: itemJacket,
};
