import { RECEIVE_TRACK, CLEAR_TRACKS, RECEIVE_TRACKS } from '../actions/track_actions';
import { merge } from 'lodash';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, state, { [action.track.id]: action.track });
    case CLEAR_TRACKS:
      return {};
    case RECEIVE_TRACKS:
      return merge({}, state, action.tracks.tracks)
    default:
      return state;
  }
};

export default tracksReducer;