import { connect } from 'react-redux';
import TrackEditForm from './track_edit_form';
import { fetchTrack } from '../../actions/track_actions';
import { updateTrackForm } from '../../actions/track_form_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.entities.tracks[ownProps.location.pathname.split('/')[2]],
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  updateTrackForm: trackForm => dispatch(updateTrackForm(trackForm)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackEditForm));