import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const navigateHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text> Home Screen </Text>
      <TouchableOpacity onPress={navigateHandler}>
        <Text>Go to login screen</Text>
      </TouchableOpacity>
    </View>
  );
}
