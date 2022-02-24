import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

//input
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
      onPress={() => {
        fetch('https://dev.stedi.me/twofactorlogin/' ,{method: 'post',  
        body: JSON.stringify({
          phoneNumber: phone,
          oneTimePasscode: number
        })}).then((response) => console.log(response.text()));
         
      } }
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
});

export default UselessTextInput;
