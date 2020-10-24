import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.gold,
    height: Metrics.h2,
    width: Metrics.h2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    top: -Metrics.h2 / 2,
    elevation: 10,
    borderColor: Colors.white,
    borderWidth: 2,
  },
});
