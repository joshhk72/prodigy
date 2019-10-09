import { connect } from 'react-redux';
import ProfileForm from './profile_form';

const mapStateToProps = ({ entities }, ownProps) => ({
  user: entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);