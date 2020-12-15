import {USER_DETAILS_SUCCESS} from '../ActionTypes';

const user = (
  state = {_id: null, name: null, email: null, score: {}, achievements: {}},
  action,
) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS:
      return {...state, ...action.payload};
    case 'CLEAR_USER':
      return {_id: null, name: null, email: null, score: {}, achievements: {}};
    default:
      return state;
  }
};

export default user;
