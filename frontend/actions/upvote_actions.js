import * as UpvoteAPIUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";

const receiveUpvote = upvote => ({
  type: RECEIVE_UPVOTE,
  upvote
});

const removeUpvote = upvoteId => ({
  type: REMOVE_UPVOTE,
  upvoteId
});

export const createUpvote = upvote => dispatch => {
  return UpvoteAPIUtil.createUpvote(upvote)
    .then(newUpvote => dispatch(receiveUpvote(newUpvote)));
};

export const reverseUpvote = id => dispatch => {
  return UpvoteAPIUtil.reverseUpvote(id)
    .then(upvote => dispatch(receiveUpvote(upvote)));
};

export const deleteUpvote = id => dispatch => {
  return UpvoteAPIUtil.deleteUpvote(id)
    .then(upvote => dispatch(removeUpvote(upvote.id)));
};


