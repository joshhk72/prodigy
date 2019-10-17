export const searchTracks = term => {
  return $.ajax({
    method: "GET",
    url: `api/search?q=${term}` 
  });
};