import { View, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import icon from "../assets/updated-logo.png";
// import icon from "../assets/Match matters logo (1).png";
import Swiper from 'react-native-swiper' 

const StartScreen = ({navigation}) => {


    const fadeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnimation]);
  



  return (

    <Animated.View style={[styles.container, { opacity: fadeAnimation }]}>

<Swiper style={styles.wrapper} loop={false} showsButtons={true} >

        <View style={styles.slide1}>
        <Video
        source={require('../assets/mixkit-group-of-friends-making-a-toast-with-wine-42718-4k.mp4')} 
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.overlay}>
      <View style={styles.logoWrapper}>
          <Image source={icon} style={styles.image} />
       
        </View>

        <View style = {styles.bottomText} >
        <Text style={styles.text}>Party & Connect Safely</Text>
        <Text style={[styles.text, {fontSize:13}]}>Experience fun and engaging events while making meaningful connections. Enjoy your journey with peace of mind in our friendly space.</Text>
        <TouchableOpacity onPress={() => console.log("Sign in with Facebook")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
        
        </View>
      </View>
        
        </View>



        <View style={styles.slide2}>
        <Video
        source={require('../assets/onscreen2.mp4')} 
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />
            <View style={styles.overlay}>
      <View style={styles.logoWrapper}>
          <Image source={icon} style={styles.image} />

        </View>

        <View style = {styles.bottomText} >
        <Text style={styles.text}>Meet Friendly Faces</Text>
        <Text style={[styles.text, {fontSize:13}]}>Connect with genuine, friendly individuals in a welcoming environment. Respect and kindness are at the heart of our community.</Text>
        <TouchableOpacity onPress={() => console.log("Sign in with Facebook")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
        
        </View>
      </View>



        </View>
        <View style={styles.slide3}>
        <Video
        source={require('../assets/onscreen3.mp4')} 
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />
           <View style={styles.overlay}>
      <View style={styles.logoWrapper}>
          <Image source={icon} style={styles.image} />
        </View>
        <View style = {styles.bottomText} >
        <Text style={styles.text}>Secure & Safe Connections</Text>
        <Text style={[styles.text, {fontSize:13}]}>Join our community with confidence. We prioritize your safety with verified profiles and robust security measures.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
              </View>
            </TouchableOpacity>
        
        </View>
      </View>
        </View>
      </Swiper>

      </Animated.View> 
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoWrapper: {
        position:'absolute',
        top: 90,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      },
      image: {
        width: 370,
        height: 110,
        resizeMode: "cover",
      },
      tagLine: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      paddingVertical:5,
    },
    bottomText: {
        top:300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: "#BF1013",
        height: 50,
        width:300,
        marginHorizontal: 50,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: "500",
        color: 'white',
      },


})