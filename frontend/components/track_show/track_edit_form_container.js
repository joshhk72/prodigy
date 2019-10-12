import { connect } from 'react-redux';
import TrackEditForm from './track_edit_form';
import { fetchTrack } from '../../actions/track_actions';
import { updateTrackForm } from '../../actions/track_form_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.entities.tracks[ownProps.match.params.trackId],
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  updateTrackForm: trackForm => dispatch(updateTrackForm(trackForm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackEditForm);