import { merge } from 'lodash';
import { RECEIVE_COMMENTS, CLEAR_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_COMMENTS:
      return {};
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    default:
      return state;
  }
}

export default commentsReducer;