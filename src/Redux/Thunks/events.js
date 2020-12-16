import * as ActionTypes from '../ActionTypes';

import {
  getEvents as getEventsService,
  markAttendance as markAttendanceService,
} from '../../Services/events.service';

export const getEvents = () => async (dispatch) => {
  try {
    const data = await getEventsService();

    const events = {};

    data.events.forEach((event) => {
      if (event.numberOfDays === 1) {
        if (events[event.startDate]) {
          events[event.startDate].push({name: event.name});
        } else {
          events[event.startDate] = [{name: event.name}];
        }
      } else {
        for (let i = 0; i < event.numberOfDays; ++i) {
          const date = new Date(
            new Date(event.startDate).getTime() + i * 24 * 60 * 60 * 1000,
          )
            .toISOString()
            .split('T')[0];
          if (events[date]) {
            events[date].push({name: `${event.name} - Day ${i + 1}`});
          } else {
            events[date] = [{name: `${event.name} - Day ${i + 1}`}];
          }
        }
      }
    });

    dispatch({
      type: ActionTypes.FETCH_EVENTS_SUCCESS,
      payload: {events},
    });
  } catch (err) {
    throw err;
  }
};

export const markAttendance = (hash) => async (_, getState) => {
  try {
    const {
      auth: {token},
    } = getState();

    const data = await markAttendanceService(token, hash);
    console.log(data);
  } catch (err) {
    throw err;
  }
};
