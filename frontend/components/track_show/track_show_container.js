import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import TrackShow from './track_show';
import { fetchAlbum, clearAlbums } from '../../actions/album_actions';
import { fetchTrack, clearTracks, updateTrack } from '../../actions/track_actions';
import { clearArtists } from '../../actions/artist_actions';
import { clearUpvotes } from '../../actions/upvote_actions';
import { receiveAnnotation, clearAnnotations } from '../../actions/annotation_actions';
import { clearComments } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.entities.tracks[ownProps.match.params.trackId],
  loggedIn: Boolean(state.session.id),
  annotations: state.entities.annotations
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchTrack: id => dispatch(fetchTrack(id)),
  clearTracks: () => dispatch(clearTracks()),
  clearArtists: () => dispatch(clearArtists()),
  clearAlbums: () => dispatch(clearAlbums()),
  clearAnnotations: () => dispatch(clearAnnotations()),
  clearUpvotes: () => dispatch(clearUpvotes()),
  clearComments: () => dispatch(clearComments()),
  updateTrack: track => dispatch(updateTrack(track)),
  createTempAnnotation: annotation => dispatch(receiveAnnotation(annotation)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow));