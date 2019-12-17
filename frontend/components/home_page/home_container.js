import { connect } from 'react-redux';
import HomePage from './home';
import { clearTracks, fetchPageTracks } from '../../actions/track_actions';

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks).sort((a,b) => new Date(b.created_at) - new Date(a.created_at)),
  maxPage: state.maxPage
});

const mapDispatchToProps = dispatch => ({
  fetchPageTracks: page => dispatch(fetchPageTracks(page)),
  clearTracks: () => dispatch(clearTracks())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomePage);