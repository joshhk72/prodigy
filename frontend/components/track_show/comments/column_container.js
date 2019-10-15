import { connect } from 'react-redux';
import CommentColumn from './column';
import { fetchTrackComments, clearComments, createComment, deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: state.entities.comments,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId)),
  clearComments: () => dispatch(clearComments()),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentColumn);