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
  image: {
    marginBottom: Metrics.marginMedium,
  },
  instructionsTitle: {
    color: Colors.gold,
    fontSize: Metrics.h2,
    marginBottom: Metrics.marginSmall,
  },
  instructionsText: {
    color: Colors.white,
    fontSize: Metrics.h3,
    marginBottom: Metrics.marginSmall,
  },
  noteText: {
    color: Colors.gold,
    fontSize: Metrics.h3,
    marginBottom: Metrics.marginSmall,
  },
});
