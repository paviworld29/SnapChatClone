import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BtnComp from '../../components/btnComp';
import Header from '../../components/Header';
import TextinputWithLable from '../../components/TextinputWithLable';
import WrapperContainer from '../../components/WrapperContainer';
import strings from '../../constants/Lang';
import en from '../../constants/Lang/en';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });

  const { isLoading, email, password, isSecure } = state;

  const updateState = data => {
    setState(prev => ({ ...prev, ...data }));
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
          btnText={en.LOGIN}
          btnStyle={styles.btnStyle}
          textStyle={{ ...commonStyles.fontsize14, transform: null }}
        />
      </View>
    </WrapperContainer>
  );
};

export default Login;
