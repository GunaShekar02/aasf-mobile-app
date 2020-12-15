import {FETCH_LEADERBOARD_SUCCESS} from '../ActionTypes';

const leaderboard = (state = {leaderboard: [], done: false}, action) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        ...state,
        leaderboard: [...state.leaderboard, ...action.payload.leaderboard],
        done: action.payload.leaderboard.length === 0,
      };
    default:
      return state;
  }
};

export default leaderboard;
