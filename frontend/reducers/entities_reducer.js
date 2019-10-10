import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './tracks_reducer';

export default combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  albums: albumsReducer,
  artists: artistsReducer
});
