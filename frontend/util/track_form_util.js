export const submitTrackForm = track_form => {
  return $.ajax({
    method: "POST",
    url: "api/track_form/",
    data: { track_form }
  });
};