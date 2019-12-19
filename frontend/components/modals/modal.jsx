import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import TrackEditFormContainer from './track_edit_form_container';
import ProfileFormContainer from './profile_form_container';
import ArtistFormContainer from './artist_form_container';
import AlbumFormContainer from './album_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'trackEdit':
      component = <TrackEditFormContainer />;
      break;
    case 'userEdit':
      component = <ProfileFormContainer />;
      break;
    case 'artistEdit':
      component = <ArtistFormContainer />;
      break;
    case 'albumEdit':
      component = <AlbumFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onMouseDown={closeModal}>
      <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
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