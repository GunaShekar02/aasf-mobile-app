import {LOGIN, LOGOUT} from '../ActionTypes';

const authReducer = (state = {isLoggedIn: false, token: null}, action) => {
  switch (action.type) {
    case LOGIN:
      return {isLoggedIn: true, token: action.payload.token};
    case LOGOUT:
      return {isLoggedIn: false, token: null};
    default:
      return state;
  }
};

export default authReducer;
