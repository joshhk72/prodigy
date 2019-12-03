export const fetchTrackQuestions = trackId => {
  return $.ajax({
    method: "GET",
    url: `api/questions?track_id=${trackId}`
  });
};

export const fetchArtistQuestions = artistId => {
  return $.ajax({
    method: "GET",
    url: `api/questions?artist_id=${artistId}`
  });
};

export const fetchAlbumQuestions = albumId => {
  return $.ajax({
    method: "GET",
    url: `api/questions?album_id=${albumId}`
  });
};

export const createQuestion = question => {
  return $.ajax({
    method: "POST",
    url: "api/questions/",
    data: { question }
  });
};

export const deleteQuestion = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/questions/${id}`
  });
};