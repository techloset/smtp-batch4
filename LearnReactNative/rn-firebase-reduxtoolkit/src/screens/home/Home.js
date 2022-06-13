import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import useHome from './useHome';

export default function Home() {
  const {count, doDecrement, doIncreament, doReset} = useHome();

  return (
    <View>
      <Text>Counter App </Text>
      <TouchableOpacity onPress={doDecrement}>
        <Text>-</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 30}}>{count}</Text>

      <TouchableOpacity onPress={doIncreament}>
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={doReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
