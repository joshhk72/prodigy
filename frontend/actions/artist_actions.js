import * as ArtistUtil from '../util/artist_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const CLEAR_ARTISTS = "CLEAR_ARTISTS"

export const clearArtists = () => ({
  type: CLEAR_ARTISTS
});

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const fetchArtist = id => dispatch => {
  return ArtistUtil.fetchArtist(id)
    .then(artist => dispatch(receiveArtist(artist)));
};

export const fetchTrackArtists = trackId => dispatch => { // data looks like { track_id: 1, artist_ids: [1,2,3] }
  return ArtistUtil.fetchTrackArtists(trackId)
    .then(artists => dispatch(receiveArtists(artists)));
};

export const createArtist = artist => dispatch => {
  return ArtistUtil.createArtist(artist)
    .then(newArtist => dispatch(receiveArtist(newArtist)));
};