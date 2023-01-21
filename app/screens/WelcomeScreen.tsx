import React, {} from 'react';
import {Image, View, Text, } from 'react-native';

export default function WelcomeScreen(props: any) {
    return <>
      <>
      <Image 
        source={require('../assets/background.jpg')}
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
          source={require('../assets/logo-red.png')}
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
  