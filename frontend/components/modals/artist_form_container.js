import { connect } from 'react-redux';
import ArtistForm from './artist_form';
import { updateArtist } from '../../actions/artist_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentArtist: Object.values(state.entities.artists)[0]
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  updateArtist: artist => dispatch(updateArtist(artist))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistForm));