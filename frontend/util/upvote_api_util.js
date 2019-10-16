const createUpvote = upvote => {
  return $.ajax({
    method: "POST",
    url: "api/upvotes",
    data: { upvote }
  });
};

const reverseUpvote = id => {
  return $.ajax({
    method: "PUT",
    url: `api/upvotes/${id}`
  });
};

const deleteUpvote = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/upvotes/${id}`
  });
};
