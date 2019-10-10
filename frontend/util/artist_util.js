export const fetchArtist = id => {
  return $.ajax({
    method: "GET",
    url: `api/artists/${id}`
  });
};

export const createArtist = artist => {
  return $.ajax({
    method: "POST",
    url: "api/artists/",
    data: { artist }
  });
};