import { navigationString } from '../constants/navigationStrings';


import TabRouter from './TabRoutes'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <>
      <Stack.Navigator

        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={navigationString.Chat}
          component={TabRouter}
        />

      </Stack.Navigator>
    </>
  );
}
