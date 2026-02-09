import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import WrapperContainer from '../../components/WrapperContainer'



const Login = () => {

const [state, setState] = useState({
  isLoading:false,
  email: '',
  password: ''


})

const {isLoading, email, password} = state

  return (
   <WrapperContainer isLoading={isLoading}>
    
    <Header />
    
   </WrapperContainer>
  )
}

export default Login
