import { connect } from 'react-redux'
import TrackForm from './track_form';
import { submitTrackForm, resetTrackFormErrors } from '../../actions/track_form_actions';
import { clearSearch, searchAlbums, searchArtists, searchFeatures, searchProducers, searchWriters } from '../../actions/search_actions';

const mapStateToProps = ({ errors, search }) => ({
  errors: errors.trackForm,
  searchedArtists: search.artists,
  searchedAlbums: search.albums,
  searchedFeatures: search.features,
  searchedProducers: search.producers,
  searchedWriters: search.writers
});

const mapDispatchToProps = dispatch => ({
  submitTrackForm: trackForm => dispatch(submitTrackForm(trackForm)),
  resetErrors: () => dispatch(resetTrackFormErrors()),
  clearSearch: () => dispatch(clearSearch()),
  searchAlbums: term => dispatch(searchAlbums(term)),
  searchArtists: term => dispatch(searchArtists(term)),
  searchFeatures: term => dispatch(searchFeatures(term)),
  searchProducers: term => dispatch(searchProducers(term)),
  searchWriters: term => dispatch(searchWriters(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);