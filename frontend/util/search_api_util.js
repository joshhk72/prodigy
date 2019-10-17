export const fetchTrackResults = term => {
  return $.ajax({
    method: "GET",
    url: `api/search?q=${term}` 
  });
};