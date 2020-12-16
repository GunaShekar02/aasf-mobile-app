import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  screen: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    padding: 0,
    margin: 0,
    backgroundColor: Colors.darkGrey,
  },
  markerStyle: {
    borderColor: Colors.gold,
    borderRadius: 10,
  },
  marked: {
    borderColor: Colors.gold,
    borderRadius: 10,
    backgroundColor: Colors.darkGrey,
  },
});
