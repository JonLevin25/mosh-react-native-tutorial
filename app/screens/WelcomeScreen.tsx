import React from 'react'
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native'

function WelcomeScreen(props: any) {
return (
    <>
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            {/* <View style={styles.contentContainer}/> */}
            <View style={styles.loginBtn}/>
            <View style={styles.registerBtn}/>
            <View style={styles.logoContainer}>
                <Image style={styles.logoImg} source={require('../assets/logo-red.png')}/>
                <Text style={styles.logoTxt}>Sell what you don't need!</Text>
            </View>
        </ImageBackground>
        
    </>

    );
}

const genericStyles = StyleSheet.create({
    btn: {
        width: "100%",
        height: 70,
    },

})

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoImg: {
        width: 100,
        height: 100,
    },
    logoTxt: {
        // position: "absolute",
        // top: 100,
        // overflow: 'visible',
    },
    logoContainer: {
        top: 50,
        position: "absolute",
        alignItems: "center",
    },
    registerBtn: {
        ...genericStyles.btn,
        backgroundColor: "#4ecdc4",
    },
    loginBtn: {
        ...genericStyles.btn,
        backgroundColor: "#fc5c65",
    }
})
  
export default WelcomeScreen;