import React, {} from 'react';
import {Image, View, Text, } from 'react-native';

export default function PhotoScreen(props: any) {
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
        <Image source={require('../assets/chair.jpg')}
        style={{
          flex: 3,
          width: "100%",
          resizeMode: "cover",
        }}/>
        <View style={{flex: 1}}/>
  
    </View>
      
  }