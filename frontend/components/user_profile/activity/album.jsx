import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from 'assets/images/no_image.png';

const AlbumActivityPanel = props => {
  const { activity, username } = props;
  const album = activity.trackable;
  const style = {
    backgroundImage: `url(${album.image_url || defaultImage})`
  };
  return (
    <li className="activity-panel">
      <Link to={`/albums/${album.id}`}>
        <div className="activity-image" style={style} />
        <p>{username} updated the album page for <span>{album.title}</span>.</p>
      </Link>
    </li>
  )
};

export default AlbumActivityPanel;