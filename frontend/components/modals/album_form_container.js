import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { updateAlbum } from '../../actions/album_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentAlbum: Object.values(state.entities.albums)[0]
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  updateAlbum: album => dispatch(updateAlbum(album))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm));