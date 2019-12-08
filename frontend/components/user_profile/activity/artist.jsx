import React from 'react';
import { Link } from 'react-router-dom';

const ArtistActivityPanel = props => {
  const { activity, username } = props;
  const artist = activity.trackable;
  return (
    <li className="activity-panel">
      <Link to={`/artists/${artist.id}`}>
        <div className="activity-image" />
        <p>{username} updated the artist page for <span>{artist.name}</span>.</p>
      </Link>
    </li>
  )
};

export default ArtistActivityPanel;