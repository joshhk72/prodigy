export const createAnnotation = annotation => {
  return $.ajax({
    method: "POST",
    url: "api/annotations/",
    data: { annotation }
  });
};

export const deleteAnnotation = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/annotations/${id}`
  });
};