import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';
import metrics from '../../Themes/Metrics';

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
  text: {
    fontSize: Metrics.h2,
    color: Colors.white,
    marginBottom: Metrics.marginMedium,
  },
  pieView: {
    alignItems: 'center',
  },
  achievementsBox: {
    alignSelf: 'center',
    width: Metrics.screenWidth * 0.75,
    borderWidth: 1,
    borderColor: Colors.gold,
    marginVertical: metrics.marginMedium,
    padding: Metrics.paddingExtraSmall,
  },
  achievementsTitle: {
    fontSize: Metrics.h2,
    color: Colors.gold,
    textAlign: 'center',
    marginBottom: metrics.marginSmall,
  },
  achievementsText: {
    fontSize: Metrics.h3,
    color: Colors.white,
    marginBottom: Metrics.marginSmall,
  },
});
