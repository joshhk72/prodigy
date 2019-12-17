import { RECEIVE_TRACKS } from '../actions/track_actions';


export default function maxPageReducer(state = false, action) {
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks.maxPage;
    default:
      return state;
  }
};
