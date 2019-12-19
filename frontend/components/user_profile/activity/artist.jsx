import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from 'assets/images/no_image.png';

const ArtistActivityPanel = props => {
  const { activity, username } = props;
  const artist = activity.trackable;

  const style = {
    backgroundImage: `url(${artist.image_url || defaultImage})`
  };
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