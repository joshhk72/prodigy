import React from 'react';
import { Link } from 'react-router-dom';

const TrackPanel = props => {
  const { name, id } = props.track;
  return (
    <li className="album-show-track-panel">
      <Link to={`/tracks/${id}`}>
        {name}
      </Link>
    </li>
  )
};

export default TrackPanel;