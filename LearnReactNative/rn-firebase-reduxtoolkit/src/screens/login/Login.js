import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const navigateHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Text> Login Screen </Text>
      <TouchableOpacity onPress={navigateHandler}>
        <Text>Go to back to Home screen</Text>
      </TouchableOpacity>
    </View>
  );
}
