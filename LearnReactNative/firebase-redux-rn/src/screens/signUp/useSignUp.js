import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { doSignUp } from '../../store/authSlicer';

export default function useSignUp() {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [age, setAge] = useState(null)
 
  const navigationHandler = () => {
    navigation.navigate('Login')
  }


  const registerHandler = () => {
        let user= {
            email,
            password,
            age,
            firstName
        }

      dispatch(doSignUp(user))
  };
  
  return {
    email,
    password,
    firstName,
    age,
    registerHandler,
    setEmail,
    setFirstName,
    setAge,
    setPassword,
    navigationHandler
  };
}
