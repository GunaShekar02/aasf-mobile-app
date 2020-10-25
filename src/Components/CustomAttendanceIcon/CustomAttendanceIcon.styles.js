import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.gold,
    height: Metrics.tabBarHeight,
    width: Metrics.tabBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    top: -Metrics.tabBarHeight * 0.3,
    elevation: 10,
    borderColor: Colors.white,
    borderWidth: 2,
  },
});
