import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/session_actions'

const mapStateToProps = ({ entities }, ownProps) => ({
  user: entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

