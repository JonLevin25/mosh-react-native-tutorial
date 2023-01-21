import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  Platform, StatusBar,
  StyleSheet,
  Text, Image, View,
  SafeAreaView,
  TouchableNativeFeedback, TouchableOpacity, Button } from 'react-native';

import { TouchableHighlight, TouchableWithoutFeedbackProps, } from 'react-native';
import { useDeviceOrientation,  } from '@react-native-community/hooks'

function MainScreen(props) {
  return <>
    <>
    <Image 
      source={require('./assets/background.jpg')}
      style={{
        flex: 0.8,
        resizeMode: "contain",
      }}
      />
      <View style={{
        flex: 0.1,
        backgroundColor: 'tomato',
        width: '100%',
      }}/>
      <View style={{
        flex: 0.1,
        backgroundColor: 'dodgerblue',
        width: '100%',
      }}/>
      </>
      <View style={{
        top: 50,
        position: "absolute",
        // backgroundColor: "gold",
        // justifyContent: "flex-start"
      }}>
        <Image
        source={require('./assets/logo-red.png')}
        style={{
          height: 100,
          width: 100,
          alignSelf: "center",
          // resizeMode: "contain"
        }}/>
        <Text style={{
          flex: 1,
          textAlign: "center",
          fontSize: 14,
          // fontFamily: ""
        }}>
          Sell what you don't need
        </Text>
      </View>
    </>
}

function PhotoScreen(props: any) {
  // flex 1, 3, 1
  // Flex: 1 
  return <View style={{
    backgroundColor:"#000",
    height: "100%",
    width: "100%",
    justifyContent: "center"
  }}>
    <View style={{
      flex: 1, // Top part
      flexDirection: "row",
      justifyContent: "space-between"
    }}>
      <View style={{
        backgroundColor: "tomato",
        width: 50,
        height: 50,
        left: 20
      }}/>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 50,
        height: 50,
        right: 20
      }}/>
    </View>
      <Image source={require('./assets/chair.jpg')}
      style={{
        flex: 3,
        width: "100%",
        resizeMode: "cover",
      }}/>
      <View style={{flex: 1}}/>

  </View>
    
}

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      {/* <MainScreen/> */}
      <PhotoScreen/>
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
