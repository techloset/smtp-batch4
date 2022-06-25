import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import useSignUp from './useSignUp';

export default function SignUp() {
  const {
    email,
    password,
    registerHandler,
    setEmail,
    setFirstName,
    setAge,
    setPassword,
    firstName,
    age,
    navigationHandler
  } = useSignUp();
  return (
    <View style={{flex: 1, backgroundColor: 'red', color: 'white'}}>
      <Text> sign up Screen </Text>

      <TextInput
        style={{
          backgroundColor: 'white',
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="enter first name"
      />

      <TextInput onChangeText={setAge} value={age} placeholder="enter age" />

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

      <TouchableOpacity onPress={registerHandler}>
        <Text>sign up</Text>
      </TouchableOpacity>


      
      <TouchableOpacity onPress={navigationHandler}>
        <Text>Already have an account? do login</Text>
      </TouchableOpacity>


    </View>
  );
}
