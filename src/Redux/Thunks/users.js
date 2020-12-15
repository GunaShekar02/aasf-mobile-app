import * as ActionTypes from '../ActionTypes';

import {getLeaderboard as getLeaderboardService} from '../../Services/users.service';

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
