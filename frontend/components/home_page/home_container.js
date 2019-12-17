import { connect } from 'react-redux';
import HomePage from './home';
import { clearTracks, fetchPageTracks } from '../../actions/track_actions';

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchPageTracks: page => dispatch(fetchPageTracks(page)),
  clearTracks: () => dispatch(clearTracks())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomePage);