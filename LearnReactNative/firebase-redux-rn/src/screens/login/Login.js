import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import useLogin from './useLogin';

export default function Login() {
  const {email, password, loginHandler, setEmail, setPassword, navigationHandler} = useLogin();
  return (
    <View style={{flex: 1}}>
      <Text> Login Screen </Text>

      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="enter email"
      />

      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="enter password"
      />

      <TouchableOpacity onPress={loginHandler}>
        <Text>sign in</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={navigationHandler}>
        <Text>Don't have an account? do signup</Text>
      </TouchableOpacity>


    </View>
  );
}
