import { combineReducers } from 'redux';
import users from './users_reducer';
import artists from './artists_reducer';
import albums from './albums_reducer';
import tracks from './tracks_reducer';
import annotations from './annotations_reducer';
import comments from './comments_reducer';
import upvotes from './upvotes_reducer';
import questions from './questions_reducer';

export default combineReducers({
  users,
  tracks,
  albums,
  artists,
  annotations,
  comments,
  upvotes,
  questions,
});
