import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS
});

export const fetchTrackComments = trackId => dispatch => {
  return CommentAPIUtil.fetchTrackComments(trackId)
    .then(comments => dispatch(receiveComments(comments)));
};

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));
};

export const deleteComment = commentId => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)));
}