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
  hero: {
    marginBottom: Metrics.marginMedium,
  },
  title: {
    color: Colors.gold,
    fontSize: Metrics.h1,
    marginBottom: Metrics.marginMedium,
  },
  loadContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: Metrics.marginSmall,
  },
  load: {
    fontSize: Metrics.h3,
    color: Colors.white,
    marginBottom: 0,
  },
});
