import { RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ANNOTATION, REMOVE_ANNOTATION, CLEAR_ANNOTATIONS } from '../actions/annotation_actions';
import { merge } from 'lodash';

const annotationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, state, action.track.annotations);
    case REMOVE_ANNOTATION:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_ANNOTATION:
      return merge({}, state, { [action.annotation.id]: action.annotation });
    case CLEAR_ANNOTATIONS:
      return {};
    default:
      return state;
  }
};

export default annotationsReducer;