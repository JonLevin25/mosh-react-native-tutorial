import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as AppStyles from "../AppStyles";

export type IconsType = keyof typeof MaterialCommunityIcons.glyphMap;
export const Icon = MaterialCommunityIcons;
