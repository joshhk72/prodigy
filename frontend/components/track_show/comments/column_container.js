import { connect } from 'react-redux';
import CommentColumn from './column';
import { fetchTrackComments, clearComments } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments
});

const mapDispatchToProps = dispatch => ({
  fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId)),
  clearComments: () => dispatch(clearComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentColumn);