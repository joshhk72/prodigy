import React from 'react';
import { Link } from 'react-router-dom';

const AlbumActivityPanel = props => {
  const { activity, username } = props;
  const album = activity.trackable;
  let style;
  if (album.image_url) {
    style = {
      backgroundImage: `url(${album.image_url})`
    };
  } else {
    style = null;
  }
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