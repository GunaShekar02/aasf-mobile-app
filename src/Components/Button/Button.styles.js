import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.gold,
    width: Metrics.screenWidth * 0.75,
    alignSelf: 'center',
    marginVertical: Metrics.marginSmall,
    padding: Metrics.paddingExtraSmall * 0.5,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.gold,
    fontSize: Metrics.h2,
    textAlign: 'center',
  },
});
