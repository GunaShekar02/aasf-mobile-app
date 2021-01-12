import * as ActionTypes from '../ActionTypes';

import {
  getUserDetails as getUserDetailsService,
  getLeaderboard as getLeaderboardService,
  resetPassword as resetPasswordService,
  resetFcmToken as resetFcmTokenService,
  uploadDP as uploadDPService,
  sendSuggestion as sendSuggestionService,
} from '../../Services/users.service';

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
    } = getState();

    const userData = await getUserDetailsService(token);

    dispatch({
      type: ActionTypes.USER_DETAILS_SUCCESS,
      payload: {user: userData.user, rank: userData.rank},
    });
  } catch (err) {
    throw err;
  }
};

export const getLeaderboard = () => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
      leaderboard: {leaderboard},
    } = getState();

    const data = await getLeaderboardService(token, leaderboard.length);
    dispatch({
      type: ActionTypes.FETCH_LEADERBOARD_SUCCESS,
      payload: {leaderboard: data.leaderboard},
    });
  } catch (err) {
    throw err;
  }
};

export const resetPassword = (currentPassword, newPassword) => async (
  _,
  getState,
) => {
  try {
    const {
      auth: {token},
    } = getState();

    await resetPasswordService(token, currentPassword, newPassword);
  } catch (err) {
    throw err;
  }
};

export const resetFcmToken = (fcmToken) => async (_, getState) => {
  try {
    const {
      auth: {token},
    } = getState();

    await resetFcmTokenService(token, fcmToken);
  } catch (err) {
    throw err;
  }
};

export const uploadDP = (dp) => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
    } = getState();

    await uploadDPService(dp, token);

    dispatch({
      type: ActionTypes.EDIT_USER_DETAILS,
      payload: {user: {dp: dp.uri}},
    });
  } catch (err) {
    throw err;
  }
};

export const sendSuggestion = (suggestion, anonymous) => async (
  _,
  getState,
) => {
  try {
    const {
      auth: {token},
    } = getState();

    await sendSuggestionService(suggestion, anonymous, token);
  } catch (err) {
    throw err;
  }
};
