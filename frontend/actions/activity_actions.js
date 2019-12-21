import * as ActivityAPIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const CLEAR_ACTIVITIES = "CLEAR_ACTIVITIES";

const receiveActivities = res => ({
  type: RECEIVE_ACTIVITIES,
  res
});

export const clearActivities = () => ({
  type: CLEAR_ACTIVITIES
});

export const fetchActivityPage = (userId, page) => dispatch => {
  return ActivityAPIUtil.fetchActivityPage(userId, page)
    .then(res => dispatch(receiveActivities(res)));
};

