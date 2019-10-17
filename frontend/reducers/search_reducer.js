import { RECEIVE_TRACK_SEARCH, CLEAR_SEARCH } from '../actions/search_actions';

const searchReducer = (state = { tracks: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_SEARCH:
      return { tracks: action.tracks };
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default searchReducer;