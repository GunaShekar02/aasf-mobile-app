import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';
import metrics from '../../Themes/Metrics';
import {widthPercentageToDP} from '../../Themes/PercentageToDPConverter';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkGrey,
    minHeight: Metrics.screenHeight,
    paddingVertical: Metrics.paddingLarge,
    paddingHorizontal: Metrics.paddingSmall,
    paddingBottom: Metrics.paddingLarge * 2,
    display: 'flex',
  },
  title: {
    color: Colors.gold,
    fontSize: Metrics.h1,
    marginBottom: Metrics.marginMedium,
  },
  imageView: {
    alignSelf: 'center',
    height: widthPercentageToDP('50%'),
    width: widthPercentageToDP('50%'),
  },
  image: {
    alignSelf: 'center',
    height: widthPercentageToDP('50%'),
    width: widthPercentageToDP('50%'),
    borderColor: Colors.white,
    borderWidth: 3,
    borderRadius: 100,
    marginBottom: Metrics.marginSmall,
  },
  edit: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    backgroundColor: Colors.gold,
    borderRadius: 100,
    height: Metrics.h2,
    width: Metrics.h2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: Metrics.h2,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Metrics.marginMedium,
  },
  card: {
    paddingVertical: Metrics.paddingExtraSmall,
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.3,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: Metrics.h3 * 1.2,
    color: Colors.white,
    marginLeft: metrics.marginSmall,
  },
});
