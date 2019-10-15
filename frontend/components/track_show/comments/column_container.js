import { connect } from 'react-redux';
import CommentColumn from './column';
import { fetchTrackComments, clearComments, createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state) => ({
  comments: state.entities.comments,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId)),
  clearComments: () => dispatch(clearComments()),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentColumn);