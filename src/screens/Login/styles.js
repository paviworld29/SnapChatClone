import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  textStyle: {
    ...commonStyles.fontsize14,
    color: colors.blue,
  },
  btnStyle: {
    borderRadius: moderateScale(54),
    height: moderateScale(48),
    backgroundColor: colors.blackOpacity20,
    marginHorizontal: moderateScale(34),
  },
  headingText: {
    ...commonStyles.fontsize14,
    fontFamily: fontFamily.medium,
    alignSelf: 'center',
    marginBottom: moderateScale(34),
    color: colors.blackOpacity20,
  },
});

export default styles;
