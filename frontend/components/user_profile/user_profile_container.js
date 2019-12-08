import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserActivities } from '../../actions/activity_actions';
import { fetchUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {
  return {
    user: entities.users[ownProps.match.params.userId],
    currentUserPage: Boolean(parseInt(ownProps.match.params.userId) === parseInt(session.id)),
    currentUser: Boolean(session.id),
    activities: entities.activities
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUserActivities: userId => dispatch(fetchUserActivities(userId)),
  fetchUser: id => dispatch(fetchUser(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

