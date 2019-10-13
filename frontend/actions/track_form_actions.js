import * as TrackFormAPIUtil from '../util/track_form_api_util';
import { receiveTrack } from './track_actions';

export const RECEIVE_TRACK_FORM = "RECEIVE_TRACK_FORM";
export const RECEIVE_TRACK_FORM_ERRORS = "RECEIVE_TRACK_FORM_ERRORS";
export const RESET_TRACK_FORM_ERRORS = "RESET_TRACK_FORM_ERRORS";

const receiveTrackFormErrors = errors => ({
  type: RECEIVE_TRACK_FORM_ERRORS,
  errors
});

export const resetTrackFormErrors = () => ({
  type: RESET_TRACK_FORM_ERRORS
});

export const submitTrackForm = trackForm => dispatch => {
  return TrackFormAPIUtil.submitTrackForm(trackForm).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveTrackFormErrors(errors))
  );
};

export const updateTrackForm = trackForm => dispatch => {
  return TrackFormAPIUtil.updateTrackForm(trackForm).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveTrackFormErrors(errors))
  );
}