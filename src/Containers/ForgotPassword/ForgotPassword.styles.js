import {StyleSheet, StatusBar} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkGrey,
    minHeight: Metrics.screenHeight + StatusBar.currentHeight,
    paddingVertical: Metrics.paddingLarge,
    paddingHorizontal: Metrics.paddingSmall,
    paddingBottom: Metrics.paddingLarge * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.gold,
    fontSize: Metrics.h2,
    marginBottom: Metrics.marginMedium,
  },
  text: {
    fontSize: Metrics.h3,
    color: Colors.white,
    textAlign: 'center',
  },
  goldText: {
    fontSize: Metrics.h3,
    color: Colors.gold,
  },
});
