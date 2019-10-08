import { connect } from 'react-redux'
import SessionForm from './session_form';
import { login, resetErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(login(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);