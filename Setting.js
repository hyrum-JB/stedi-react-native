import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//inputcode



function Setting() {
    return(
      <View>
      <Button
      title="Log In"
      onPress={() => Alert.alert('login Button pressed')}
    />
      </View>
    )
  }

export default Setting;

// function setUserLoggedIn(props) {
//   return(
//     <View>
//     <Button
//     title="Log out"
//     onPress={props.setUserLoggedIn(false)}
//   />
//     </View>
//   )
// }

// export default setUserLoggedIn;