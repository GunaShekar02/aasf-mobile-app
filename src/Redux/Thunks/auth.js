import * as ActionTypes from '../ActionTypes';

import {login as loginService} from '../../Services/auth.service';

export const login = (roll, password) => async (dispatch) => {
  try {
    const data = await loginService(roll, password);

    dispatch({
      type: ActionTypes.LOGIN,
      payload: {token: data.token},
    });
  } catch (err) {
    throw err;
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.LOGOUT,
    }),
      dispatch({
        type: ActionTypes.CLEAR_USER_DETAILS,
      });
    dispatch({
      type: ActionTypes.CLEAR_LEADERBOARD,
    });
  } catch (err) {
    throw err;
  }
};
