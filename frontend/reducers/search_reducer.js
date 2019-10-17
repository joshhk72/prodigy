import { RECEIVE_PRODUCER_SEARCH, RECEIVE_FEATURE_SEARCH, RECEIVE_WRITER_SEARCH, RECEIVE_TRACK_SEARCH, RECEIVE_ALBUM_SEARCH, RECEIVE_ARTIST_SEARCH, CLEAR_SEARCH } from '../actions/search_actions';
import { merge } from 'lodash';

const defaultState = { tracks: [], albums: [], artists: [], features: [], producers: [], writers: [] };

const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {...state};
  switch (action.type) {
    case RECEIVE_TRACK_SEARCH:
      return Object.assign(newState, { tracks: action.tracks });
    case RECEIVE_ALBUM_SEARCH:
      return Object.assign(newState, { albums: action.albums });
    case RECEIVE_ARTIST_SEARCH:
      return Object.assign(newState, { artists: action.artists });
    case RECEIVE_FEATURE_SEARCH:
      return Object.assign(newState, { features: action.features });
    case RECEIVE_PRODUCER_SEARCH:
      return Object.assign(newState, { producers: action.producers });
    case RECEIVE_WRITER_SEARCH:
      return Object.assign(newState, { writers: action.writers });
    case CLEAR_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;