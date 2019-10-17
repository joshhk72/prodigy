export const searchTracks = term => {
  return $.ajax({
    method: "GET",
    url: `api/search?q=${term}` 
  });
};

export const searchAlbums = term => {
  return $.ajax({
    method: "GET",
    url: `api/suggest?album=${term}`
  });
};

export const searchArtists = term => {
  return $.ajax({
    method: "GET",
    url: `api/suggest?artist=${term}`
  });
};