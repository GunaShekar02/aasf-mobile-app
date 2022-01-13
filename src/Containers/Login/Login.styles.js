import {StyleSheet, StatusBar} from 'react-native';

import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkGrey,
    minHeight: Metrics.screenHeight + StatusBar.currentHeight,
    paddingVertical: Metrics.paddingLarge,
    paddingHorizontal: Metrics.paddingSmall,
    paddingBottom: Metrics.paddingLarge * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Metrics.screenWidth / 1.5,
    height: Metrics.screenWidth / 1.5,
  },
  text: {
    fontSize: Metrics.h3,
    color: Colors.gold,
  },
});
