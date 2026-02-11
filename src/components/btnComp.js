import { Text, TouchableOpacity } from 'react-native';
import Color from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';

const BtnComp = ({ btnText, onPress, btnStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.btnStyle, btnStyle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ ...styles.textStyle, textStyle }}>{btnText}</Text>
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
    ...commonStyles.fontsize24,
  },
};

export default BtnComp;
