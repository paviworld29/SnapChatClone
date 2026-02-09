import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { navigationString } from '../../constants/navigationStrings';
import { SafeAreaView } from 'react-native-safe-area-context';
import Color from '../../styles/colors';
import FontFamily from '../../styles/fontFamily';
import BtnComp from '../../components/btnComp';




const InitialScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/Images/bgImage.jpeg')}
      style={{ flex: 1, justifyContent: 'flex-end' }}
    >
      <SafeAreaView>

        <BtnComp
          btnText={'Log in'} onPress={() => navigation.navigate(navigationString.Login)}
         
        />
        <BtnComp
          btnText={'Sign up'}
          btnStyle= {{ backgroundColor: Color.blue}}
          onPress={()=> navigation.navigate(navigationString.Signup)}
         
        />
      </SafeAreaView>
    
        
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default InitialScreen;
