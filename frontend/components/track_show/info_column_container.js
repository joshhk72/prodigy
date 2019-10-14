import { connect } from 'react-redux';
import InfoColumn from './info_column';
import { withRouter } from 'react-router-dom';
import { receiveAnnotation, removeAnnotation, createAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createTempAnnotation: annotation => dispatch(receiveAnnotation(annotation)),
  removeAnnotation: id => dispatch(removeAnnotation(id)),
  createAnnotation: annotation => dispatch(createAnnotation(annotation))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoColumn));