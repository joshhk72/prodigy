import React from 'react';
import { closeModal } from '..//actions/modal_actions';
import { connect } from 'react-redux';
import TrackEditFormContainer from './track_show/track_edit_form_container';
import ProfileFormContainer from './user_profile/profile_form_container';
import { Route } from 'react-router-dom';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'trackEdit':
      // <Route path="/tracks/:trackId" component={TrackEditFormContainer} />
      component = <TrackEditFormContainer />;
      break;
    case 'userEdit':
      component = <ProfileFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);