import { RECEIVE_ACTIVITIES, CLEAR_ACTIVITIES } from '../actions/activity_actions';
import { merge } from 'lodash';

const activitiesReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = [].concat(state);
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return newState.concat(action.res.activities);
    case CLEAR_ACTIVITIES:
      return [];
    default:
      return state;
  }
}

export default activitiesReducer;