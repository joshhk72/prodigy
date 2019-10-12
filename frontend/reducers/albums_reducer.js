import { RECEIVE_ALBUM, CLEAR_ALBUMS } from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    case CLEAR_ALBUMS:
      return {};
    default:
      return state;
  }
}

export default albumsReducer;