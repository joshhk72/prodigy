import { connect } from 'react-redux';
import CommentListItem from './list_item';
import { deleteComment } from '../../../actions/comment_actions';
import { createUpvote, reverseUpvote, deleteUpvote, fetchCommentUpvotes, clearUpvotes } from '../../../actions/upvote_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  upvotes: Object.values(state.entities.upvotes)
});

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id)),
  createUpvote: upvote => dispatch(createUpvote(upvote)),
  reverseUpvote: id => dispatch(reverseUpvote(id)),
  deleteUpvote: id => dispatch(deleteUpvote(id)),
  fetchCommentUpvotes: commentId => dispatch(fetchCommentUpvotes(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListItem);