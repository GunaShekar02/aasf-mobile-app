import {Dimensions} from 'react-native';
import {widthPercentageToDP} from './PercentageToDPConverter';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  h1: widthPercentageToDP('20%'),
  h2: widthPercentageToDP('15%'),
};

export default metrics;
