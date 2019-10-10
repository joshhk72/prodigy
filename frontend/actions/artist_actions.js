import * as ArtistUtil from '../util/artist_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchArtist = id => dispatch => {
  return AlbumUtil.fetchArtist(id)
    .then(artist => dispatch(receiveArtist(artist)));
};

export const createArtist = artist => dispatch => {
  return ArtistUtil.createArtist(artist)
    .then(newArtist => dispatch(receiveArtist(newArtist)));
};