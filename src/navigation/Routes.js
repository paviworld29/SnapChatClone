import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector((state) => state.auth.isLogin);
console.log(isLogin);

  return (
    <NavigationContainer>
      {isLogin? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  );
}
