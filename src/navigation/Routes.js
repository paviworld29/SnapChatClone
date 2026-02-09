import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationString } from '../constants/navigationStrings';

import AuthStack from './AuthStack';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer >
   
       <AuthStack  />
    
    </NavigationContainer>
  );
}


