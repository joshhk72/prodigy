import { RECEIVE_TRACK_FORM_ERRORS, RESET_TRACK_FORM_ERRORS } from '../actions/track_form_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';

const trackFormErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_FORM_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_TRACK:
      return [];
    case RESET_TRACK_FORM_ERRORS:
      return [];
    default:
      return state;
  }
}

export default trackFormErrorsReducer;