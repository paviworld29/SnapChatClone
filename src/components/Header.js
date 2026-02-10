import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from '../styles/responsiveSize'
import colors from '../styles/colors'

const Header = ({
    leftImg = imagePath.isBack,
    onpress,
    headerStyle
}) => {

    const navigation = useNavigation();
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <TouchableOpacity onPress={!!onpress ? onpress : () => navigation.goBack()}>
                <Image style={{tintColor:colors.blue}} source={leftImg} />
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48)

    }
})
export default Header