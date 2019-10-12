import { connect } from 'react-redux';
import TrackEditForm from './track_edit_form';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.entities.tracks[ownProps.match.params.trackId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackEditForm);