import * as ArtistUtil from '../util/artist_api_util';

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

export const createArtist = artist => dispatch => {
  return ArtistUtil.createArtist(artist)
    .then(newArtist => dispatch(receiveArtist(newArtist)));
};

export const updateArtist = artist => dispatch => {
  return ArtistUtil.updateArtist(artist)
    .then(artist => dispatch(receiveArtist(artist)));
};