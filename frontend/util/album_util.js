export const fetchAlbum = id => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  });
};

export const createAlbum = album => {
  return $.ajax({
    method: "POST",
    url: "api/artists/",
    data: { album }
  });
};