export const fetchCommentUpvotes = commentId => {
  return $.ajax({
    method: "GET",
    url: `api/upvotes?comment_id=${commentId}`
  });
};

export const fetchAnswerUpvotes = answerId => {
  return $.ajax({
    method: "GET",
    url: `api/upvotes?answer_id=${answerId}`
  });
};

export const fetchAnnotationUpvotes = annotationId => {
  return $.ajax({
    method: "GET",
    url: `api/upvotes?annotation_id=${annotationId}`
  });
};

export const createUpvote = upvote => {
  return $.ajax({
    method: "POST",
    url: "api/upvotes",
    data: { upvote }
  });
};

export const reverseUpvote = id => {
  return $.ajax({
    method: "PUT",
    url: `api/upvotes/${id}`
  });
};

export const deleteUpvote = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/upvotes/${id}`
  });
};
