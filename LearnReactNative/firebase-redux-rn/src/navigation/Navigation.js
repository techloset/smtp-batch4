import * as React from 'react';
import {useSelector} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Login from '../screens/login/Login';
import SignUp from '../screens/signUp/SignUp';
import SplashScreen from '../screens/splashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const isUserLoggedIn = useSelector(store => store.auth.isUserLoggedIn);
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator  initialRouteName="Tabs">
        <Drawer.Screen name="Tabs" component={TabNavigation} />
        <Drawer.Screen name="Stack" component={StackNavigation} />
        <Drawer.Screen name="LoginDrawer" component={Login} />
      </Drawer.Navigator> */}

      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        {!isUserLoggedIn ? (
          <> 
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
