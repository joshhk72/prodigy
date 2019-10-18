import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => ({
  user: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);