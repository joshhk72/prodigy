import React from 'react';
import { Link } from 'react-router-dom';

const ArtistActivityPanel = props => {
  const { activity, username } = props;
  const artist = activity.trackable;

  let style;
  if (artist.image_url) {
    style = {
      backgroundImage: `url(${artist.image_url})`
    };
  } else {
    style = null;
  }
  return (
    <li className="activity-panel">
      <Link to={`/artists/${artist.id}`}>
        <div className="activity-image" style={style}/>
        <p>{username} updated the artist page for <span>{artist.name}</span>.</p>
      </Link>
    </li>
  )
};

export default ArtistActivityPanel;