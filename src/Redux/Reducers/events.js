import {FETCH_EVENTS_SUCCESS} from '../ActionTypes';

const events = (state = {events: []}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {...state, events: action.payload.events};
    default:
      return state;
  }
};

export default events;
