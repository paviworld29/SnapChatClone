import { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import BtnComp from '../../components/btnComp';
import Header from '../../components/Header';
import TextinputWithLable from '../../components/TextinputWithLable';
import WrapperContainer from '../../components/WrapperContainer';
import strings from '../../constants/Lang';
import en from '../../constants/Lang/en';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';
import actions from '../../redux/actions';

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
    isEnable: false,
  });

  const { isLoading, email, password, isSecure, isEnable } = state;

  const updateState = data => {
    setState(prev => ({ ...prev, ...data }));
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      updateState({ isEnable: true });
      return;
    }
    updateState({ isEnable: false });
  }, [email, password]);

  const onLogin = () => {
    actions.login(true)
    Alert.alert('Login successfully');
  };

  return (
    <WrapperContainer isLoading={isLoading}>
      <Header />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.headingText}>{strings.LOGIN}</Text>

          <TextinputWithLable
            label={strings.USERNAME_OR_EMAIL}
            value={email}
            placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
            onChangeText={email => updateState({ email })}
          />

          <TextinputWithLable
            label={strings.PASSWORD}
            value={password}
            placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
            onChangeText={password => updateState({ password })}
            secureTextEntry={isSecure}
            isSecure={isSecure}
            onpressSecure={() => updateState({ isSecure: !isSecure })}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Text style={styles.textStyle}>{strings.FORGOT_YOUR_PASSWORD}</Text>
          </TouchableOpacity>
        </View>
        <BtnComp
          onPress={onLogin}
          btnText={en.LOGIN}
          isDisable={!isEnable}
          btnStyle={{
            ...styles.btnStyle,
            backgroundColor: isEnable ? colors.blue : colors.blackOpacity20,
          }}
          textStyle={{ ...commonStyles.fontsize14, transform: null }}
        />
      </View>
    </WrapperContainer>
  );
};

export default Login;
