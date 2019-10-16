import * as TrackUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const CLEAR_TRACKS = "CLEAR_TRACKS";

export const clearTracks = () => ({
  type: CLEAR_TRACKS
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const fetchTrack = id => dispatch => {
  return TrackUtil.fetchTrack(id)
    .then(track => dispatch(receiveTrack(track)));
};

export const fetchTracks = () => dispatch => {
  return TrackUtil.fetchTracks()
    .then(tracks => dispatch(receiveTracks(tracks)));
};

export const fetchRecentTracks = () => dispatch => {
  return TrackUtil.fetchRecentTracks()
    .then(tracks => dispatch(receiveTracks(tracks)));
};

export const createTrack = track => dispatch => {
  return TrackUtil.createTrack(track)
    .then(newTrack => dispatch(receiveTrack(newTrack)));
};

export const updateTrack = track => dispatch => {
  return TrackUtil.updateTrack(track)
    .then(newTrack => dispatch(receiveTrack(newTrack)));
};

