import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Color from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';

const BtnComp = ({ btnText, onPress, btnStyle }) => {
  return (
    <TouchableOpacity style={[styles.btnStyle, btnStyle]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.textStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyle: {
    backgroundColor: Color.red,
    height: moderateScale(62),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    ...commonStyles.fontsize24
  },
};

export default BtnComp;
