import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  input: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    width: Metrics.screenWidth * 0.75,
    alignSelf: 'center',
    color: Colors.white,
    marginBottom: Metrics.marginSmall,
  },
});
