import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors))
  )
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors))
  )
};

