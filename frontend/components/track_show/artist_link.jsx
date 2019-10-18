import React from 'react';
import { Link } from 'react-router-dom';

const TrackArtistLink = props => {
  return (
    <Link to={`/artists/${props.artist.id}`}>
      {props.artist.name}
    </Link>
  )
};

export default TrackArtistLink;