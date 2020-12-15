import axios from 'axios';

import {
  LEADERBOARD_URL,
  PASSWORD_URL,
  USER_DETAILS_URL,
} from '../Utils/constants';

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

export const getLeaderboard = async (token, cursor) => {
  try {
    const {data} = await axios.get(`${LEADERBOARD_URL}?cursor=${cursor}`, {
      headers: {Authorization: `Bearer ${token}`},
    });

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const resetPassword = async (token, currentPassword, newPassword) => {
  try {
    const {data} = await axios.put(
      PASSWORD_URL,
      {currentPassword, newPassword},
      {headers: {Authorization: `Bearer ${token}`}},
    );

    return data;
  } catch (err) {
    throw err.response.data;
  }
};
