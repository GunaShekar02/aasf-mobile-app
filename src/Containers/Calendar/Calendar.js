import React from 'react';
import {View, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';

import {Colors, Metrics} from '../../Themes';

import styles from './Calendar.styles';

import {items} from '../../Assets/data/calendar';

const Calendar = () => {
  const renderItem = (item) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
    );
  };

  const customTheme = {
    agendaDayTextColor: Colors.white,
    agendaDayNumColor: Colors.white,
    agendaKnobColor: Colors.gold,
    agendaTodayColor: Colors.gold,
    todayTextColor: Colors.gold,
    dotColor: Colors.gold,
    selectedDayBackgroundColor: Colors.gold,
    'stylesheet.agenda.main': {
      reservations: {
        flex: 1,
        marginTop: 104 + Metrics.marginSmall,
        paddingBottom: Metrics.paddingLarge,
        backgroundColor: Colors.darkGrey,
      },
    },
    'stylesheet.agenda.list': {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrics.marginSmall,
      },
      day: {
        width: 63,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  };

  return (
    <>
      <Agenda
        items={items}
        selected={new Date()}
        minDate={'2020-05-10'}
        maxDate={'2021-05-30'}
        renderItem={renderItem}
        theme={customTheme}
        style={styles.agendaList}
      />
    </>
  );
};

export default Calendar;
