export const submitTrackForm = track_form => {
  return $.ajax({
    method: "POST",
    url: "api/track_forms/",
    data: { track_form }
  });
};

export const updateTrackForm = track_form => {
  return $.ajax({
    method: "PATCH",
    url: `api/track_forms/${track_form.id}`,
    data: { track_form }
  })
};