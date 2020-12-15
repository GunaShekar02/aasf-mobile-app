import axios from 'axios';

import {EVENTS_URL} from '../Utils/constants';

export const getEvents = async () => {
  try {
    const {data} = await axios.get(EVENTS_URL);

    return data;
  } catch (err) {
    throw err;
  }
};
