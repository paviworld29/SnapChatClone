import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Color from '../styles/colors';
import FontFamily from '../styles/fontFamily';

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
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Color.white,
    fontSize: 23,
    fontFamily: FontFamily.medium,
    textTransform: 'uppercase',
  },
};

export default BtnComp;
