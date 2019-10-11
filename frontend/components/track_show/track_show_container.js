import { connect } from 'react-redux'
import TrackShow from './track_show';
import { fetchTrack, clearTracks, updateTrack } from '../../actions/track_actions';
import { fetchTrackArtists, clearArtists } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.entities.tracks[ownProps.match.params.trackId],
  primaryArtist: Object.values(state.entities.artists).find(artist => artist.ords.includes(1))
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  fetchTrackArtists: trackId => dispatch(fetchTrackArtists(trackId)), //// data looks like { track_id: 1, artist_ids: [1,2,3] }
  clearTracks: () => dispatch(clearTracks()),
  clearArtists: () => dispatch(clearArtists()),
  updateTrack: track => dispatch(updateTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);