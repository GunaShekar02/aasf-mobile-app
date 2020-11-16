import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../Themes';

export default StyleSheet.create({
  card: {
    width: Metrics.screenWidth * 0.75,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrics.paddingSmall,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  cardText: {
    fontSize: Metrics.h3 * 1.5,
    color: Colors.white,
    textAlign: 'center',
  },
  agendaList: {
    backgroundColor: Colors.darkGrey,
  },
});
