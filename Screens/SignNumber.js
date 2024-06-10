import { View, Text, Image, StyleSheet,TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native'
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRegistrationProgress, saveRegistrationProgress } from '../backend/registrationUtils';

export default function SignNumber({navigation}) {

  let textInput = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, setFocusInput] = useState(true);


   onChangePhone = (number) => {
    setPhoneNumber(number)
   
   };

useEffect(() => {
  getRegistrationProgress('PhoneNum').then(progressData => {
    if(progressData){
      setPhoneNumber(progressData.phoneNumber || '');
    }
  })
});

   const onPressContinue = () => {
    if(phoneNumber.trim() !== ''){
      saveRegistrationProgress('PhoneNum',{phoneNumber});
    }

    if(phoneNumber){
      navigation.navigate('OtpScreen')
    }
   };

   const onChangeFocus = () => {
    setFocusInput(true);
   };

   const onChangeBlur = () => {
    setFocusInput(false);
   };


   useEffect (() => {
    textInput.focus();
   },[]);

  return (
    <SafeAreaView style={styles.area}> 
         <View style={styles.container}>
    

             <KeyboardAvoidingView 
              keyboardVerticalOffset={50}
              behavior= {'padding'}
              style = {styles.containerAvoidingView}
             > 
         
 
         <TouchableOpacity>
           <Text    onPress={() => {
            navigation.goBack();
          }}>Back</Text>
         </TouchableOpacity>

              <Text style={styles.headTitle}>Can we get your number?</Text>
              <Text style={styles.headTag}>We only use phone number to make sure everyone on Match Matters is real.</Text>
              <View style={
                [styles.inputContainer,
                  {
                    borderBottomColor:'#244DB7',
                  }
                ]}>
                <View style = {styles.openDialogView}>
              <Text style={styles.text}>{'  +91 |'}</Text>
              </View>
               <TextInput 
               ref = {(input) => textInput = input}
               style = {styles.phoneInputStyle}
               placeholder='Enter Your Number' 
               keyboardType='numeric'
               value={phoneNumber}
               onChangeText={onChangePhone}
               secureTextEntry = {false}
               onFocus={onChangeFocus}
               onBlur = {onChangeBlur}
               />
              </View>

              <View style={styles.viewBottom}>
                <TouchableOpacity onPress={onPressContinue}>
                       <View style = {styles.btnContinue}>
                        <Text style = {styles.textContinue}>Continue</Text>
                       </View>
                </TouchableOpacity>
              </View>

              </KeyboardAvoidingView>


         </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex:1,
    backgroundColor:'#fff',
    marginTop:100,
    alignItems:'center',
  },
  containerAvoidingView:{
    marginLeft:30,
  },
  headTitle: {
    fontSize: 40,
    fontWeight:'800',
    marginRight: 100,
  },
  headTag:{
    fontSize:16,
   marginTop:5, 
   marginRight:30,
  },
  inputContainer:{
    flexDirection: 'row',
    marginRight:30,
    borderRadius:10,
    backgroundColor:'#fff',
    borderBottomWidth:1.5,

    borderColor:'#C0C0C0',
    borderWidth:1,

    marginTop:20,
  },
  phoneInputStyle:{
    marginLeft:5,
    flex:1,
    height:50,
  },
  openDialogView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  viewBottom:{
    flex:1,
    justifyContent:'flex-end',
    marginBottom:115,
    alignItems:'center',
  },
  btnContinue:{
    width:250,
    height:50,
    borderRadius:35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#244DB7'
  },
  textContinue: {
    fontSize:22,
    fontWeight: 'bold',
    color: '#ffffff',
    alignItems:'center',
  },
  button:{
    marginTop: 100,
    marginHorizontal:10,
  },
});