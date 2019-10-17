import { connect } from 'react-redux'
import PageHeader from './page_header';
import { logout } from '../../actions/session_actions';
import { searchTracks, clearSearch } from '../../actions/search_actions';

const MapStateToProps = ({ entities, session, search }) => ({
  currentUser: entities.users[session.id],
  searchedTracks: search.tracks
});

const MapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  searchTracks: term => dispatch(searchTracks(term)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(
  MapStateToProps, 
  MapDispatchToProps
)(PageHeader);