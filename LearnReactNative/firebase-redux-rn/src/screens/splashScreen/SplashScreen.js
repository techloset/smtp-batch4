import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {View, Text, ActivityIndicator} from 'react-native';
import { fetchUser } from '../../store/authSlicer';

export default function SplashScreen() {
     
    const dispatch = useDispatch()
    const navigate = useNavigation()


    useEffect(()=>{
        dispatch(fetchUser(navigate))
    },[])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator />
      <Text>Loading....</Text>
    </View>
  );
}
