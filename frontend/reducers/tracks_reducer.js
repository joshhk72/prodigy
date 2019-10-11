import { RECEIVE_TRACK, CLEAR_TRACKS } from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, { [action.track.id]: action.track });
    case CLEAR_TRACKS:
      return {};
    default:
      return state;
  }
}

export default tracksReducer;