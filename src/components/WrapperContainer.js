import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';
import Loader from './Loader';

const WrapperContainer = ({
  barStyle = 'dark-content',
  statusBarColor = colors.white,
  children,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: moderateScale(24),
  },
});
export default WrapperContainer;
