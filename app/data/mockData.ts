import { createItemData, ItemData } from "./ItemData";
import { ListingData } from "./ListingData";
import { UserData } from "./UserData";

export const userMosh: UserData = {
  name: "Mosh Hamedani",
  profileImage: require("../assets/exercise_2/mosh.jpg"),
};

export const itemJacket: ItemData = createItemData(
  require("../assets/exercise_2/jacket.jpg"),
  "Red jacket for sale!",
  100
);

export const listingJacket: ListingData = {
  user: userMosh,
  item: itemJacket,
};
