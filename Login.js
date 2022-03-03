import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

//input
//const setUserLoggedIn = (props) => {
const UselessTextInput = () => {
  const [phone, onChangePhoneNumber] = React.useState(null);
  const [number, onChangeOTP] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={phone}
        placeholder="phone number"
        keyboardType="numeric"
      />
      <View>
      <Button
      style={styles.btn}
      title="send otp"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/'+phone, {method: 'post'}) }
      />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={number}
        placeholder="one time passcode"
        keyboardType="numeric"
      />
      <View>
      <Button
      title="Login"
      style={styles.btn}
      //onPress={() => {props.setUserLoggedIn(true)}}
       onPress={() => {
          fetch('https://dev.stedi.me/twofactorlogin/' ,{method: 'POST',  
          body: JSON.stringify({
            phoneNumber: phone,
            oneTimePasscode: number
          })}).then((response) => response.text()) 
          .then((result) => {

            //console.log(result());
       
             if(result.message === 'SUCCESS'){
               {props.setUserLoggedIn(true)}
              } else {
                  alert('Please check your login information.');
              }
           });
         }
       }
      />
    </View>
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  
  },
  btn: { 
    flexDirection: 'row',
    color: "#841584",
    width: '50%', 
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
});

//export default setUserLoggedIn;
export default UselessTextInput;
