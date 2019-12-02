export const createanswer = answer => {
  return $.ajax({
    method: "POST",
    url: "api/answer/",
    data: { answer }
  });
};

export const deleteAnswer = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/answers/${id}`
  });
};