import { ImageSourcePropType } from "react-native";
import { UserData } from "./UserData";

export type ItemData = {
  image: ImageSourcePropType;
  title: string;
  price: number;
  getPriceStr: () => string;
};

export function createItemData(
  image: ImageSourcePropType,
  title: string,
  price: number
): ItemData {
  return {
    image: image,
    title: title,
    price: price,

    getPriceStr: function () {
      return `$${this.price}`;
    },
  };
}
