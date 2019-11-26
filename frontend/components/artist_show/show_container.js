import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistShow from './show';
import { clearArtists, fetchArtist } from '../../actions/artist_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id),
  currentArtist: state.entities.artists[ownProps.match.params.artistId]
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  clearArtists: () => dispatch(clearArtists()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow));