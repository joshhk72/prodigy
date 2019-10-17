import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_TRACK_SEARCH = "RECEIVE_TRACK_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

const receiveTrackSearch = tracks => ({
  type: RECEIVE_TRACK_SEARCH,
  tracks
});

export const searchTracks = term => dispatch => {
  return SearchAPIUtil.searchTracks(term)
    .then(res => dispatch(receiveTrackSearch(res.tracks)));
};