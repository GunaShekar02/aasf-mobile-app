import {StyleSheet} from 'react-native';

import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  card: {
    width: Metrics.screenWidth * 0.75,
    height: Metrics.screenWidth * 0.4,
    alignSelf: 'center',
    borderRadius: 10,
    padding: Metrics.paddingExtraSmall,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Metrics.marginSmall,
    borderWidth: 2,
  },
  cardText: {
    width: '50%',
    color: Colors.white,
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
});
