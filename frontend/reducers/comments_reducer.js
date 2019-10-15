import { merge } from 'lodash';
import { RECEIVE_COMMENTS, CLEAR_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_COMMENT:
      const changedState = merge({}, state);
      delete changedState[action.commentId];
      return changedState;
    case CLEAR_COMMENTS:
      return {};
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      const newState =  merge({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;