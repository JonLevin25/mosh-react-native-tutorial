import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import PhotoScreen from './app/screens/PhotoScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import {
  Platform, StatusBar,
  StyleSheet,
  Text, Image, View,
  SafeAreaView,
  TouchableNativeFeedback, TouchableOpacity, Button } from 'react-native';

import { TouchableHighlight, TouchableWithoutFeedbackProps, } from 'react-native';
import { useDeviceOrientation,  } from '@react-native-community/hooks'

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen/>
      {/* <PhotoScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#000',
    marginTop: Platform.OS === 'android'
      ? (StatusBar.currentHeight ?? 0) + 10
      : 10
  },
});
