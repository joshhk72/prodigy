import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {
  return {
    user: entities.users[ownProps.match.params.userId],
    currentUser: Boolean(parseInt(ownProps.match.params.userId) === parseInt(session.id))
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

