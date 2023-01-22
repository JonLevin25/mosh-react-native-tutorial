import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { AppColors } from "./app/AppStyles";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import WideButton from "./app/components/WideButton";

export default function App() {
  return <WelcomeScreen />;
}
