import * as ActivityAPIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const CLEAR_ACTIVITIES = "CLEAR_ACTIVITIES";

const receiveActivities = activities => ({
  type: RECEIVE_ACTIVITIES,
  activities
});

export const fetchUserActivities = userId => dispatch => {
  return ActivityAPIUtil.fetchUserActivities(userId)
    .then(res => dispatch(receiveActivities(res.activities)));
};

