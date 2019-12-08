export const fetchUserActivities = userId => {
  return $.ajax({
    method: "GET",
    url: `api/activities?user_id=${userId}`
  })
};