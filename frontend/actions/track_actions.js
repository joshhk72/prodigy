import * as TrackUtil from '../util/track_util';

export const RECEIVE_TRACK = "RECEIVE_TRACK";

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const fetchTrack = id => dispatch => {
  return TrackUtil.fetchTrack(id)
    .then(track => dispatch(receiveTrack(track)));
};

export const createTrack = track => dispatch => {
  return TrackUtil.createTrack(track)
    .then(newTrack => dispatch(receiveTrack(newTrack)));
};

export const updateTrack = track => dispatch => {
  return TrackUtil.updateTrack(track)
    .then(newTrack => dispatch(receiveTrack(newTrack)));
};

