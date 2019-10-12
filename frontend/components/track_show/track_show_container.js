import { connect } from 'react-redux'
import TrackShow from './track_show';
import { fetchAlbum, clearAlbums } from '../../actions/album_actions';
import { fetchTrack, clearTracks, updateTrack } from '../../actions/track_actions';
import { clearArtists } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.entities.tracks[ownProps.match.params.trackId],
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchTrack: id => dispatch(fetchTrack(id)),
  clearTracks: () => dispatch(clearTracks()),
  clearArtists: () => dispatch(clearArtists()),
  clearAlbums: () => dispatch(clearAlbums()),
  updateTrack: track => dispatch(updateTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);