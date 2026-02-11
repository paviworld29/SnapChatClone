import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BtnComp from '../../components/btnComp';
import strings from '../../constants/Lang';
import { navigationString } from '../../constants/navigationStrings';
import Color from '../../styles/colors';

const InitialScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/Images/bgImage.jpeg')}
      style={{ flex: 1, justifyContent: 'flex-end' }}
    >
      <SafeAreaView>
        <BtnComp
          btnText={strings.LOGIN}
          onPress={() => navigation.navigate(navigationString.Login)}
        />
        <BtnComp
          btnText={strings.SIGNUP}
          btnStyle={{ backgroundColor: Color.blue }}
          onPress={() => navigation.navigate(navigationString.Signup)}
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
