import axios from 'axios';

import {USER_DETAILS_URL} from '../Utils/constants';

export const getUserDetails = async (token) => {
  try {
    const {data} = await axios.get(USER_DETAILS_URL, {
      headers: {Authorization: `Bearer ${token}`},
    });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};
