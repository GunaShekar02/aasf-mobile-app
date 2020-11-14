import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkGrey,
    minHeight: Metrics.screenHeight,
    paddingVertical: Metrics.paddingLarge,
    paddingHorizontal: Metrics.paddingSmall,
    paddingBottom: Metrics.paddingLarge * 5,
    display: 'flex',
  },
  title: {
    color: Colors.gold,
    fontSize: Metrics.h1,
    marginBottom: Metrics.marginMedium,
  },
  text: {
    color: Colors.white,
    fontSize: Metrics.h2,
    marginBottom: Metrics.marginSmall,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  goldText: {
    color: Colors.gold,
    fontSize: Metrics.h2,
  },
});
