import { RECEIVE_UPVOTES, RECEIVE_UPVOTE, REMOVE_UPVOTE, CLEAR_UPVOTES } from '../actions/upvote_actions';
import { merge } from 'lodash';

const upvotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UPVOTES:
      return merge({}, state, action.upvotes);
    case RECEIVE_UPVOTE:
      return merge({}, state, { [action.upvote.id]: action.upvote });
    case CLEAR_UPVOTES:
      return {};
    case REMOVE_UPVOTE:
      const newState = merge({}, state);
      delete newState[action.upvoteId];
      return newState;
    default:
      return state;
  }
};

export default upvotesReducer;