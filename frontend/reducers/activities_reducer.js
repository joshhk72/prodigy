import { RECEIVE_ACTIVITIES, CLEAR_ACTIVITIES } from '../actions/activity_actions';

const activitiesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case CLEAR_ACTIVITIES:
      return [];
    default:
      return state;
  }
}

export default activitiesReducer;