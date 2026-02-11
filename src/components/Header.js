import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';

const Header = ({ leftImg = imagePath.isBack, onpress, headerStyle }) => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.headerStyle, ...headerStyle }}>
      <TouchableOpacity
        onPress={!!onpress ? onpress : () => navigation.goBack()}
      >
        <Image style={{ tintColor: colors.blue }} source={leftImg} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    minHeight: moderateScale(48),
  },
});
export default Header;
