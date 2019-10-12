import * as AlbumUtil from '../util/album_util';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const CLEAR_ALBUMS = "CLEAR_ALBUMS";

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const clearAlbums = () => ({
  type: CLEAR_ALBUMS
});

export const fetchAlbum = id => dispatch => {
  return AlbumUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album)));
};

export const createAlbum = album => dispatch => {
  return AlbumUtil.createAlbum(album)
    .then(newAlbum => dispatch(receiveAlbum(newAlbum)));
};