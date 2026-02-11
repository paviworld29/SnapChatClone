import { navigationString } from '../constants/navigationStrings';
import { InitialScreen, Login, Signup } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <>
      <Stack.Navigator
        initialRouteName={navigationString.InitialScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={navigationString.InitialScreen}
          component={InitialScreen}
        />
        <Stack.Screen name={navigationString.Signup} component={Signup} />
        <Stack.Screen name={navigationString.Login} component={Login} />
      </Stack.Navigator>
    </>
  );
}
