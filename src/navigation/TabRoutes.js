import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import imagePath from '../constants/imagePath';
import { navigationString } from '../constants/navigationStrings';
import { Camera, Chat, Map, Stories } from '../screens';
import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={navigationString.Chat}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.blackOpacity20 },
      }}
    >
      <BottomTab.Screen
        name={navigationString.Map}
        component={Map}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? colors.green : colors.white,
                  height:35,width:35
                 }}
                source={imagePath.icLoc}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationString.Chat}
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? colors.green : colors.white, height:35,width:35 }}
                source={imagePath.icChat}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationString.Camera}
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? colors.green : colors.white, height:35,width:35 }}
                source={imagePath.icCamera}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationString.Stories}
        component={Stories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? colors.green : colors.white, height:35,width:35 }}
                source={imagePath.icPeople}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
