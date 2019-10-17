import { connect } from 'react-redux';
import InfoColumn from './info_column';
import { withRouter } from 'react-router-dom';
import { receiveAnnotation, removeAnnotation, createAnnotation, deleteAnnotation } from '../../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => ({
  annotations: state.entities.annotations,
  currentUserId: state.session.id,
  currentTrack: state.entities.tracks[ownProps.match.params.trackId]
});

const mapDispatchToProps = dispatch => ({
  createTempAnnotation: annotation => dispatch(receiveAnnotation(annotation)),
  removeAnnotation: id => dispatch(removeAnnotation(id)),
  createAnnotation: annotation => dispatch(createAnnotation(annotation)),
  deleteAnnotation: id => dispatch(deleteAnnotation(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoColumn));