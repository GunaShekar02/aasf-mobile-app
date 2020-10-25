import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkGrey,
    minHeight: Metrics.screenHeight,
    paddingVertical: Metrics.paddingLarge,
    paddingHorizontal: Metrics.paddingSmall,
    display: 'flex',
  },
  intro: {
    color: Colors.white,
    fontSize: Metrics.h2,
  },
  name: {
    color: Colors.gold,
    fontSize: Metrics.h1,
    marginBottom: Metrics.marginMedium,
  },
  hero: {
    width: Metrics.screenWidth * 0.75,
    height: Metrics.screenWidth * 0.5,
    alignSelf: 'center',
  },
});
