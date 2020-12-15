import axios from 'axios';

import {LOGIN_URL} from '../Utils/constants';

export const login = async (roll, password) => {
  try {
    const {data} = await axios.post(LOGIN_URL, {roll, password});

    return data;
  } catch (err) {
    throw err.response.data;
  }
};
