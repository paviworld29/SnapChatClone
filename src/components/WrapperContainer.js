import { View, Text, StyleSheet,StatusBar } from 'react-native'
import React, { Children } from 'react'
import colors from '../styles/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loader from './Loader'
import { moderateScale } from '../styles/responsiveSize'

const WrapperContainer = ({
    barStyle = 'dark-content',
    statusBarColor = colors.white,
    children,
    isLoading
}
) => {
  return (
    <View style={styles.container}> 
     <StatusBar barStyle={barStyle} backgroundColor= {statusBarColor} />
     <SafeAreaView>
        {children}
     </SafeAreaView>
     <Loader isLoading={isLoading} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white,
        padding: moderateScale(24)

    }
})
export default WrapperContainer