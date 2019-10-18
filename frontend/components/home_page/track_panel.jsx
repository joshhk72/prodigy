import React from 'react';
import { Link } from 'react-router-dom';

const TrackPanel = props => {
  const { track, num } = props;
  console.dir(track.artist)
  return (
    <li className="home-track-list-li">
      <Link to={`/tracks/${track.id}`}>
        <div className="home-track-list-index">{num}</div>
        <div className="home-track-list-main">
          <img className="home-track-list-image" src={track.image_url}/>
          <span>{track.name}</span>
        </div>
        <div className="home-track-list-artist">{track.artist.name}</div>
      </Link>
    </li>
  );
};

export default TrackPanel;