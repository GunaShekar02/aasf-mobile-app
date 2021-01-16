import axios from 'axios';

import {ATTENDANCE_URL, EVENTS_URL} from '../Utils/constants';

export const getEvents = async () => {
  try {
    const {data} = await axios.get(EVENTS_URL);

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const markAttendance = async (token, hash) => {
  try {
    const {data} = await axios.post(
      ATTENDANCE_URL,
      {hash},
      {headers: {Authorization: `Bearer ${token}`}},
    );

    return data;
  } catch (err) {
    throw err.response.data;
  }
};
