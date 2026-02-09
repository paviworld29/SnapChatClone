import React from 'react';
import { InitialScreen, Signup, Login } from '../screens';
import { navigationString } from '../constants/navigationStrings';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
 

export default function () {
  return (
    <>
    <Stack.Navigator initialRouteName={navigationString.InitialScreen} screenOptions={{headerShown:false}}>
      <Stack.Screen
        name={navigationString.InitialScreen}
        component={InitialScreen}
      />
      <Stack.Screen
        name={navigationString.Signup}
        component={Signup}
      />
      <Stack.Screen
        name={navigationString.Login}
        component={Login}
      />

      </Stack.Navigator>
    </>
  );
}
