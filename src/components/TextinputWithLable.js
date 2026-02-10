import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import imagePath from '../constants/imagePath'
import strings from '../constants/Lang'


const TextinputWithLable = ({
  value,
  placeholder,
  onChangeText,
  inputStyle,
  textStyle,
  label,
  isSecure,
  onpressSecure,
  ...props
  

}) => {
  return (
    <View style={{marginBottom:moderateScale(16)}}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View
        style={{ ...styles.inputStyle, ...inputStyle }}>
        <TextInput value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={{ ...styles.textStyle, ...textStyle,color:'black'}}

          {...props}
        />
        {!!onpressSecure && (
           <TouchableOpacity onPress={onpressSecure} style={{marginLeft:moderateScale(6)}}>
          <Image source={isSecure ? imagePath.icHide: imagePath.icShow} />
        </TouchableOpacity>
        )
         
        }
      
      </View>


    </View>
  )
}


const styles = StyleSheet.create({

  inputStyle: {
    borderBottomWidth: 1.5,
    padding: 8,
    borderBottomColor: colors.blackOpacity20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelStyle: {
    ...commonStyles.fontsize12,
    transform: 'uppercase',
    fontFamily: fontFamily.medium,
    color: colors.blackOpacity50
  },
  textStyle: {
    ...commonStyles.fontsize14,
    flex:1
  }
})

export default TextinputWithLable