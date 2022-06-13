import React, {useState} from 'react';
import {Text, View, ScrollView, ActivityIndicator, Button} from 'react-native';
import internal from 'stream';

export default function App() {
  const [students, setStudents] = useState([
    {
      name: 'naveed',
      roll: 32,
    },
    {
      name: 'ali',
      roll: 3322,
    },
    {
      name: 'muhammad',
      roll: 3232,
    },
    {
      name: 'naveed',
      roll: 32,
    },
    {
      name: 'ali',
      roll: 3322,
    },
    {
      name: 'muhammad',
      roll: 3232,
    },
    {
      name: 'naveed',
      roll: 32,
    },
    {
      name: 'ali',
      roll: 3322,
    },
    {
      name: 'muhammad',
      roll: 3232,
    },
    {
      name: 'naveed',
      roll: 32,
    },
    {
      name: 'ali',
      roll: 3322,
    },
    {
      name: 'muhammad',
      roll: 3232,
    },
    {
      name: 'naveed',
      roll: 32,
    },
    {
      name: 'ali',
      roll: 3322,
    },
    {
      name: 'muhammad',
      roll: 3232,
    },
    {
      name: 'naveed',
      roll: 32,
    },
    {
      name: 'ali',
      roll: 3322,
    },
    {
      name: 'muhammad',
      roll: 3232,
    },
  ]);
  const onPressHandler = () => {};
  return (
    <ScrollView>
      <ActivityIndicator />
      <Button onPress={onPressHandler} title="Learn More" color="#841584" />
      {students.map((item, index)=>{
        return (
          <>
          <Text key={item.it}>{item.name}</Text>
          <Text>{item.roll}</Text>
          </>
        )
      })}
      <Text>Naeemfjjj ali G </Text>
    </ScrollView>
  );
}
