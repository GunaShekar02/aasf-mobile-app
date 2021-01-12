import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

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
    color: Colors.white,
    fontSize: Metrics.h3,
    marginBottom: Metrics.marginSmall,
  },
  goldText: {
    color: Colors.gold,
    fontSize: Metrics.h3,
    marginBottom: Metrics.marginSmall,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.75,
    alignSelf: 'center',
  },
  checkbox: {
    marginRight: Metrics.marginSmall,
  },
  checkboxText: {
    color: Colors.white,
    fontSize: Metrics.h3,
  },
});
