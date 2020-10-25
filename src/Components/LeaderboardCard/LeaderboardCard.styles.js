import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';
import {widthPercentageToDP} from '../../Themes/PercentageToDPConverter';

export default StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.3,
    paddingVertical: Metrics.paddingExtraSmall,
  },
  image: {
    height: widthPercentageToDP('10%'),
    width: widthPercentageToDP('10%'),
    borderRadius: 100,
    borderColor: Colors.white,
    borderWidth: 2,
  },
  name: {
    fontSize: Metrics.h3,
    color: Colors.white,
    maxWidth: widthPercentageToDP('50%'),
    textAlign: 'center',
  },
  roll: {
    fontSize: Metrics.h3,
    color: Colors.gold,
    textAlign: 'center',
  },
  score: {
    fontSize: Metrics.h3,
    color: Colors.gold,
  },
  imageLeader: {
    height: widthPercentageToDP('15%'),
    width: widthPercentageToDP('15%'),
    borderRadius: 100,
    borderColor: Colors.white,
    borderWidth: 2,
  },
  nameLeader: {
    fontSize: Metrics.h2,
    color: Colors.white,
    maxWidth: widthPercentageToDP('50%'),
    textAlign: 'center',
  },
  rollLeader: {
    fontSize: Metrics.h3,
    color: Colors.gold,
    textAlign: 'center',
  },
  scoreLeader: {
    fontSize: Metrics.h2,
    color: Colors.gold,
  },
});
