import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { doLogin } from '../../store/authSlicer';

export default function useLogin() {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const navigationHandler = () => {
    navigation.navigate('signUp')
  }

  const loginHandler = () => {
        let user= {
            email,
            password
        }

      dispatch(doLogin(user))
  };
  
  return {
    email,
    password,
    loginHandler,
    setEmail,
    setPassword,
    navigationHandler
  };
}
