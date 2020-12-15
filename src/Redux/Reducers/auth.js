import {LOGIN, LOGIN_FAILED, LOGIN_LOADING, LOGOUT} from '../ActionTypes';

const authReducer = (state = {isLoggedIn: false, token: null}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
      };
    case LOGOUT:
      return {...state, isLoggedIn: false, token: null};
    default:
      return state;
  }
};

export default authReducer;
