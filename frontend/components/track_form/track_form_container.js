import { connect } from 'react-redux'
import TrackForm from './track_form';
import { submitTrackForm, resetTrackFormErrors } from '../../actions/track_form_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.trackForm
});

const mapDispatchToProps = dispatch => ({
  submitTrackForm: trackForm => dispatch(submitTrackForm(trackForm)),
  resetErrors: () => dispatch(resetTrackFormErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);