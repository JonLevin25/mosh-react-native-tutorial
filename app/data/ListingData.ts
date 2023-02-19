import { ItemData } from "./ItemData";
import { UserData } from "./UserData";

export type ListingData = {
  id: string;
  item: ItemData;
  user: UserData;
};
