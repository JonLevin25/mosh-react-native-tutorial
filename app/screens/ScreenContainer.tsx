import React from 'react';
import { Platform, StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

type ScreenContainerProps = {
    children?: React.ReactNode;
};

function ScreenContainer({children}: ScreenContainerProps) {
    const container = Platform.select({
        ios: <SafeAreaView>{children}</SafeAreaView>,
        android: <View style={{
            // backgroundColor: "green",
            width: "100%",
            height: "100%",
            top: StatusBar.currentHeight}}>{children}</View>,
    });
    if (container == null) {
        throw new Error(`Unknown Platform! ${Platform.OS}`);
    }
    return container;
}

export default ScreenContainer;