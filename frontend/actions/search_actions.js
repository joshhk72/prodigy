import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_TRACK_SEARCH = "RECEIVE_TRACK_SEARCH";

const receiveTrackSearch = tracks => ({
  type: RECEIVE_TRACK_SEARCH,
  tracks
});

export const searchTracks = term => dispatch => {
  return SearchAPIUtil.searchTracks(term)
    .then(res => dispatch(receiveTrackSearch(res.tracks)));
};