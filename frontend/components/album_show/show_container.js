import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumShow from './show';
import { clearAlbums, fetchAlbum } from '../../actions/album_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentAlbum: state.entities.albums[ownProps.match.params.albumId]
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  clearAlbums: () => dispatch(clearAlbums()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));