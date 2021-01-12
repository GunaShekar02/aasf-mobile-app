import axios from 'axios';

import {
  DP_URL,
  FCM_TOKEN_URL,
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

export const resetFcmToken = async (token, fcmToken) => {
  try {
    await axios.put(
      FCM_TOKEN_URL,
      {fcmToken},
      {headers: {Authorization: `Bearer ${token}`}},
    );
  } catch (err) {
    throw err.response.data;
  }
};

export const uploadDP = async ({fileName, type, uri}, token) => {
  try {
    const data = new FormData();
    data.append('dp', {
      name: fileName,
      type: type,
      uri: uri,
    });

    const response = await axios.put(DP_URL, data, {
      headers: {Authorization: `Bearer ${token}`},
      'content-type': 'multipart/form-data',
    });

    return response.data;
  } catch (err) {
    throw err;
  }
};
