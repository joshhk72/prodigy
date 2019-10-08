import { connect } from 'react-redux'
import SessionForm from './session_form';
import { signup, resetErrors } from '../../actions/session_actions';


const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(signup(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);