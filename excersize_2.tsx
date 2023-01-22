import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      ></View>
    </View>
  );
}
