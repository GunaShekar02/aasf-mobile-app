import * as ActionTypes from '../ActionTypes';

import {
  getLeaderboard as getLeaderboardService,
  resetPassword as resetPasswordService,
} from '../../Services/users.service';

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
