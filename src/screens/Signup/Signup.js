import { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import BtnComp from '../../components/btnComp'
import Header from '../../components/Header'
import TextinputWithLable from '../../components/TextinputWithLable'
import WrapperContainer from '../../components/WrapperContainer'
import strings from '../../constants/Lang'
import en from '../../constants/Lang/en'
import styles from './styles'
const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    isSecure: true
  })

  const { isLoading, email, password, isSecure, firstName, lastName, userName } = state;

  const updateState = (data) => {
    setState((prev) => ({ ...prev, ...data }))

  }

  const onSignUp = () =>{
    Alert.alert('Sign Up successfully')
  }

  return (
    <WrapperContainer isLoading={isLoading}>

      <Header />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <Text style={styles.headingText}>{strings.CREATE_YOUR_ACCOUNT}</Text>
          <TextinputWithLable
            label={strings.FIRST_NAME}
            value={firstName}
            placeholder={strings.ENTER_YOUR_FIRST_NAME}
            onChangeText={(firstName) => updateState({ firstName })}



          />
          <TextinputWithLable
            label={strings.LAST_NAME}
            value={lastName}
            placeholder={strings.ENTER_YOUR_LAST_NAME}
            onChangeText={(lastName) => updateState({ lastName })}



          />
          <TextinputWithLable
            label={strings.USERNAME}
            value={userName}
            placeholder={strings.ENTER_YOUR_USERNAME}
            onChangeText={(lastName) => updateState({ lastName })}



          />
             <TextinputWithLable
            label={strings.USERNAME_OR_EMAIL}
            value={userName}
            placeholder={strings.USERNAME_OR_EMAIL}
            onChangeText={(lastName) => updateState({ lastName })}



          />

          <TextinputWithLable
            label={strings.PASSWORD}
            value={password}
            placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
            onChangeText={(password) => updateState({ password })}
            secureTextEntry={isSecure}
            isSecure={isSecure}
            onpressSecure={() => updateState({ isSecure: !isSecure })}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Text style={styles.textStyle}>{strings.FORGOT_YOUR_PASSWORD}</Text>

          </TouchableOpacity>
        </View>
        <BtnComp
        onPress ={onSignUp}btnText={en.SIGNUP_AND_ACCEPT} btnStyle={styles.btnStyle} style={[styles.textStyle]} />

      </View>


    </WrapperContainer>
  )
}




export default Login
