import {USER_DETAILS_SUCCESS} from '../ActionTypes';

const userReducer = (
  state = {_id: null, name: null, email: null, score: {}, achievements: {}},
  action,
) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default userReducer;
