import React from 'react';
import { Link } from 'react-router-dom';

const ArtistAlbumLi = props => {
  const { image_url, title, id, date } = props.album;
  let year;
  if (date) year = date.split("-")[0];

  return (
    <li className="artist-album-li">
      <Link to={`/albums/${id}`}>
        <img src={image_url || null} alt=""/>
        <h3>{title}</h3>
        { year && <span>{year}</span> }
      </Link>
    </li>
  )
};

export default ArtistAlbumLi;