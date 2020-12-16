import {CLEAR_LEADERBOARD, FETCH_LEADERBOARD_SUCCESS} from '../ActionTypes';

const leaderboard = (state = {leaderboard: [], done: false}, action) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        ...state,
        leaderboard: [...state.leaderboard, ...action.payload.leaderboard],
        done: action.payload.leaderboard.length === 0,
      };
    case CLEAR_LEADERBOARD:
      return {...state, leaderboard: [], done: false};
    default:
      return state;
  }
};

export default leaderboard;
