import { RECEIVE_TRACK, CLEAR_TRACKS, RECEIVE_TRACKS } from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, { [action.track.id]: action.track });
    case CLEAR_TRACKS:
      return {};
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.tracks)
    default:
      return state;
  }
}

export default tracksReducer;