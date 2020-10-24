import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.grey,
    height: Metrics.h2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
