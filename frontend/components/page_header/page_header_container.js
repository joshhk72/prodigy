import { connect } from 'react-redux'
import PageHeader from './page_header';
import { logout } from '../../actions/session_actions';
import { searchTracks, clearSearch } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';

const MapStateToProps = ({ entities, session, search }) => ({
  currentUser: entities.users[session.id],
  searchedTracks: search.tracks
});

const MapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  searchTracks: term => dispatch(searchTracks(term)),
  clearSearch: () => dispatch(clearSearch())
});

export default withRouter(connect(
  MapStateToProps, 
  MapDispatchToProps
)(PageHeader));