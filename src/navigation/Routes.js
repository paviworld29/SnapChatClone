import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <MainStack /> */}
    </NavigationContainer>
  );
}
