export const fetchArtist = id => {
  return $.ajax({
    method: "GET",
    url: `api/artists/${id}`
  });
};

export const fetchTrackArtists = (track_id) => {
  return $.ajax({
    method: "GET",
    url: `api/artists?track_id=${track_id}`
  });
};

export const createArtist = artist => {
  return $.ajax({
    method: "POST",
    url: "api/artists/",
    data: { artist }
  });
};

export const updateArtist = artist => {
  return $.ajax({
    method: "PATCH",
    url: `api/artists/${artist.id}`,
    data: { artist }
  });
};