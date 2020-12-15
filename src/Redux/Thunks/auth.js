import * as ActionTypes from '../ActionTypes';

import {login as loginService} from '../../Services/auth.service';
import {getUserDetails as getUserDetailsService} from '../../Services/users.service';

export const login = (roll, password) => async (dispatch) => {
  try {
    const data = await loginService(roll, password);
    const userData = await getUserDetailsService(data.token);

    dispatch({
      type: ActionTypes.LOGIN,
      payload: {token: data.token},
    });

    dispatch({
      type: ActionTypes.USER_DETAILS_SUCCESS,
      payload: userData.user,
    });
  } catch (err) {
    throw err;
  }
};
