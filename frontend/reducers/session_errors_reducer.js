import { RESET_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.values(action.errors.responseJSON);
    case RECEIVE_CURRENT_USER:
      return [];
    case RESET_ERRORS:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;