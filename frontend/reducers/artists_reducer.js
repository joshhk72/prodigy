import { RECEIVE_ARTIST, RECEIVE_ARTISTS, CLEAR_ARTISTS } from '../actions/artist_actions';
import { merge } from 'lodash';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.artist.id]: action.artist });
    case RECEIVE_ARTISTS:
      const artists = {};
      action.artists.forEach(artist => artists[artist.id] = artist);
      return merge({}, state, artists);
    case CLEAR_ARTISTS:
      return {};
    default:
      return state;
  }
}

export default artistsReducer;