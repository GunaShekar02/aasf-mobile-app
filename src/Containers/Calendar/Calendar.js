import React, {useEffect} from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {useSelector, useDispatch} from 'react-redux';

import {Colors, Metrics} from '../../Themes';

import styles from './Calendar.styles';

import {getEvents} from '../../Redux/Thunks/events';

const Calendar = () => {
  const {events} = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => (item.joinLink ? Linking.openURL(item.joinLink) : null)}>
        <Text style={styles.cardText}>{item.name}</Text>
      </TouchableOpacity>
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
        items={events}
        selected={new Date()}
        minDate={'2022-01-10'}
        maxDate={'2023-05-30'}
        renderItem={renderItem}
        theme={customTheme}
        style={styles.agendaList}
      />
    </>
  );
};

export default Calendar;
