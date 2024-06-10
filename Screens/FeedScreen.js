// import { View, Text, Image, StyleSheet,TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native'
// import React, {useEffect, useRef, useState} from 'react';
// import { Video } from 'expo-av';

// export default function FeedScreen({navigation}) {
//     return (
//         <SafeAreaView style={styles.area}>
//             <View style={styles.container}>
//                 <KeyboardAvoidingView
//                     keyboardVerticalOffset={50}
//                     behavior={'padding'}
//                     style={styles.containerAvoidingView}
//                 >
//                     <Text style={styles.headTitle}>HomeScreen</Text>
//                     <Text style={styles.headTag}>All The Video Profiles Will Be Visible</Text>
                   
                  
                 
//                 </KeyboardAvoidingView>
//             </View>
//         </SafeAreaView>
//     );
// }



// const styles = StyleSheet.create({
//     area: {
//       flex: 1,
//       backgroundColor: '#fff',
//     },
//     container: {
//       flex:1,
//       backgroundColor:'#fff',
//       marginTop:100,
//       alignItems:'center',
//     },
//     containerAvoidingView:{
//       marginLeft:30,
//     },
//     headTitle: {
//       fontSize: 40,
//       fontWeight:'800',
//       marginRight: 100,
//     },
//     headTag:{
//       fontSize:16,
//      marginTop:5, 
//      marginRight:30,
//     },
//   });



import { View, Text, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Video } from 'expo-av';
import icon from "../assets/Match matters logo.png";

export default function FeedScreen({ navigation }) {14
  const [showSignInOptions, setShowSignInOptions] = useState(false);
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
   <Video
        source={require('../assets/sv1.mp4')} 
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
          <Text style={styles.tagLine}>(Tagline For match matters)</Text>
        </View>

      </View>
    </Animated.View>
  );
}

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
    position: 'absolute',
    top: 150,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 260,
    height: 115,
    resizeMode: "cover",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
