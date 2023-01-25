import { ImageSourcePropType } from "react-native";
import { ListingData } from "./ListingData";

export type MessageData = {
  id: string,
  title: string,
  description: string,
  image: ImageSourcePropType,
};
