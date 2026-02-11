import { StyleSheet } from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
import {
    textScale
} from './responsiveSize';

export default StyleSheet.create({
  fontsize10: {
    fontSize: textScale(10),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontsize12: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontsize14: {
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontsize16: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontsize20: {
    fontSize: textScale(20),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontsize24: {
    fontSize: textScale(24),
    color: colors.white,
    fontFamily: fontFamily.medium,
    textTransform: 'uppercase',
  },
});
