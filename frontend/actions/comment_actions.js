import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS
});

export const fetchTrackComments = trackId => dispatch => {
  CommentAPIUtil.fetchTrackComments(trackId)
    .then(comments => dispatch(receiveComments(comments)));
};