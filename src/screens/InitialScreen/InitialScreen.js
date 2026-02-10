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
import en from '../../constants/Lang/en';
import strings from '../../constants/Lang';





const InitialScreen = ({ navigation }) => {
  return (
    
    <ImageBackground
      source={require('../../assets/Images/bgImage.jpeg')}
      style={{ flex: 1, justifyContent: 'flex-end' }}
    >
      <SafeAreaView>

        <BtnComp
          btnText={strings.LOGIN} onPress={() => navigation.navigate(navigationString.Login)}
         
        />
        <BtnComp
          btnText={strings.SIGNUP}
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
