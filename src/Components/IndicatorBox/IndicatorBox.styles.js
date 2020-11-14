import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  indicatorView: {
    flexDirection: 'row',
    marginBottom: Metrics.marginSmall,
    alignSelf: 'flex-start',
  },
  indicatorBox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    marginRight: Metrics.marginSmall,
  },
  indicatorText: {
    fontSize: Metrics.h3,
    color: Colors.white,
  },
});
