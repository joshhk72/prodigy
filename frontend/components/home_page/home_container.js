import { connect } from 'react-redux';
import HomePage from './home';
import { clearTracks, fetchRecentTracks } from '../../actions/track_actions';

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchRecentTracks()),
  clearTracks: () => dispatch(clearTracks())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomePage);