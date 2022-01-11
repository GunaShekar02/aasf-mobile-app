import axios from 'axios';

import {
  FORGOT_PASSWORD_URL,
  LOGIN_URL,
  RESET_PASSWORD_URL,
} from '../Utils/constants';

export const login = async (roll, password) => {
  try {
    const {data} = await axios.post(LOGIN_URL, {roll, password});

    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export const sendForgotPasswordOTP = async (roll) => {
  try {
    await axios.post(FORGOT_PASSWORD_URL, {roll});
  } catch (err) {
    throw err.response.data;
  }
};

export const resetPasswordWithOtp = async (
  roll,
  otp,
  newPassword,
  confirmPassword,
) => {
  try {
    await axios.post(RESET_PASSWORD_URL, {
      roll,
      otp: Number(otp),
      newPassword,
      confirmPassword,
    });
  } catch (err) {
    throw err.response.data;
  }
};
