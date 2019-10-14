import { connect } from 'react-redux';
import InfoColumn from './info_column';
import { receiveAnnotation, removeAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createTempAnnotation: annotation => dispatch(receiveAnnotation(annotation)),
  removeAnnotation: id => dispatch(removeAnnotation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoColumn);