import { connect } from 'react-redux';
import { createUpvote, reverseUpvote, deleteUpvote, fetchAnnotationUpvotes, clearUpvotes } from '../../../actions/upvote_actions';
import AnnotationShow from './annotation_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  upvotes: Object.values(state.entities.upvotes),
  annotation: state.entities.annotations[ownProps.match.params.annotationId]
});

const mapDispatchToProps = dispatch => ({
  createUpvote: upvote => dispatch(createUpvote(upvote)),
  reverseUpvote: id => dispatch(reverseUpvote(id)),
  deleteUpvote: id => dispatch(deleteUpvote(id)),
  fetchAnnotationUpvotes: annotationId => dispatch(fetchAnnotationUpvotes(annotationId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationShow);