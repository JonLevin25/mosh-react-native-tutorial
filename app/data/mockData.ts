import { DropdownItemType } from "./DropDownItem";
import { createItemData, ItemData } from "./ItemData";
import { ListingData } from "./ListingData";
import { MessageData } from "./MessageData";
import { UserData } from "./UserData";

export const dropDownItems: DropdownItemType[] = [
  { icon: "tune", color: "secondary", text: "Update" },
  { icon: "bookmark", color: "gray", text: "Food/Medicine" },
  { icon: "bookmark", color: "gray", text: "Emotional" },
  { icon: "bookmark", color: "gray", text: "Custom" },
];

export const userMosh: UserData = {
  name: "Mosh Hamedani",
  email: "programmingwithmosh@gmail.com",
  profileImage: require("../assets/exercise_2/mosh.jpg"),
};

export const itemJacket: ItemData = createItemData(
  require("../assets/exercise_2/jacket.jpg"),
  "Red jacket for sale!",
  100
);

export const itemCouch: ItemData = createItemData(
  require("../assets/exercise_2/couch.jpg"),
  "Couch in great condition",
  1000
);

export const listingJacket: ListingData = {
  id: "jacket",
  user: userMosh,
  item: itemJacket,
};

export const listingCouch: ListingData = {
  id: "couch",
  user: userMosh,
  item: itemCouch,
};

export const mockMessages: MessageData[] = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/exercise_2/mosh.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/exercise_2/mosh.jpg"),
  },
];
