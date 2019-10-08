import { connect } from 'react-redux'
import PageHeader from './page_header';
import { logout } from '../../actions/session_actions';

const MapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const MapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  MapStateToProps, 
  MapDispatchToProps
)(PageHeader);