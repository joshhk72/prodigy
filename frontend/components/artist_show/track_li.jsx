import React from 'react';
import { Link } from 'react-router-dom';

const ArtistTrackLi = props => {
  return (
    <li className="artist-track-li">
      <Link to={`/tracks/${props.track.id}`}>
        <img className="artist-track-panel-image" src={props.track.image_url}/>
        <span>{props.track.name}</span>
      </Link>
    </li>
  )
};

export default ArtistTrackLi;