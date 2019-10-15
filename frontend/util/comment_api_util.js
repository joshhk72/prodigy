export const fetchTrackComments = trackId => {
  return $.ajax({
    method: "GET",
    url: `api/comments?track_id=${trackId}`
  });
};

export const fetchUserComments = authorId => {
  return $.ajax({
    method: "GET",
    url: `api/comments?author_id=${authorId}`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: "api/comments",
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
};