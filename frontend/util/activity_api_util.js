export const fetchActivityPage = (userId, page) => {
  return $.ajax({
    method: "GET",
    url: `api/activities?user_id=${userId}&page=${page}`
  }); 
};