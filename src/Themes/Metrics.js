import {Dimensions} from 'react-native';
import {widthPercentageToDP} from './PercentageToDPConverter';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: widthPercentageToDP('15%'),
  h1: widthPercentageToDP('10%'),
  h2: widthPercentageToDP('7%'),
  paddingLarge: widthPercentageToDP('15%'),
  paddingMedium: widthPercentageToDP('10%'),
  paddingSmall: widthPercentageToDP('7%'),
  paddingExtraSmall: widthPercentageToDP('3%'),
  marginLarge: widthPercentageToDP('10%'),
  marginMedium: widthPercentageToDP('7%'),
  marginSmall: widthPercentageToDP('3%'),
};

export default metrics;
