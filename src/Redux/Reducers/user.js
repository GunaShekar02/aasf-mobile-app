import {
  USER_DETAILS_SUCCESS,
  CLEAR_USER_DETAILS,
  EDIT_USER_DETAILS,
} from '../ActionTypes';

const user = (
  state = {_id: null, name: null, email: null, score: {}, achievements: {}},
  action,
) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS:
      return {...state, ...action.payload.user, rank: action.payload.rank};
    case EDIT_USER_DETAILS:
      return {...state, ...action.payload.user};
    case CLEAR_USER_DETAILS:
      return {_id: null, name: null, email: null, score: {}, achievements: {}};
    default:
      return state;
  }
};

export default user;
