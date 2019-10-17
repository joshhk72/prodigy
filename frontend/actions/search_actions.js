import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_TRACK_SEARCH = "RECEIVE_TRACK_SEARCH";

export const RECEIVE_ARTIST_SEARCH = "RECEIVE_ARTIST_SEARCH";
export const RECEIVE_PRODUCER_SEARCH = "RECEIVE_PRODUCER_SEARCH";
export const RECEIVE_FEATURE_SEARCH = "RECEIVE_FEATURE_SEARCH";
export const RECEIVE_WRITER_SEARCH = "RECEIVE_WRITER_SEARCH";

export const RECEIVE_ALBUM_SEARCH = "RECEIVE_ALBUM_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

const receiveTrackSearch = tracks => ({
  type: RECEIVE_TRACK_SEARCH,
  tracks
});

const receiveArtistSearch = artists => ({
  type: RECEIVE_ARTIST_SEARCH,
  artists
});

const receiveFeatureSearch = features => ({
  type: RECEIVE_FEATURE_SEARCH,
  features
});

const receiveProducerSearch = producers => ({
  type: RECEIVE_PRODUCER_SEARCH,
  producers
});

const receiveWriterSearch = writers => ({
  type: RECEIVE_WRITER_SEARCH,
  writers
});

const receiveAlbumSearch = albums => ({
  type: RECEIVE_ALBUM_SEARCH,
  albums
});

export const searchArtists = term => dispatch => {
  return SearchAPIUtil.searchArtists(term)
    .then(res => dispatch(receiveArtistSearch(res.artists)));
};

export const searchFeatures = term => dispatch => {
  return SearchAPIUtil.searchArtists(term)
    .then(res => dispatch(receiveFeatureSearch(res.artists)));
};

export const searchProducers = term => dispatch => {
  return SearchAPIUtil.searchArtists(term)
    .then(res => dispatch(receiveProducerSearch(res.artists)));
};

export const searchWriters = term => dispatch => {
  return SearchAPIUtil.searchArtists(term)
    .then(res => dispatch(receiveWriterSearch(res.artists)));
};

export const searchAlbums = term => dispatch => {
  return SearchAPIUtil.searchAlbums(term)
    .then(res => dispatch(receiveAlbumSearch(res.albums)));
};

export const searchTracks = term => dispatch => {
  return SearchAPIUtil.searchTracks(term)
    .then(res => dispatch(receiveTrackSearch(res.tracks)));
};