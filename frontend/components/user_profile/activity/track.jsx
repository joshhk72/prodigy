import React from 'react';
import { Link } from 'react-router-dom';

const TrackActivityPanel = props => {
  const { activity, username } = props;
  const track = activity.trackable;
  const textComponent = activity.key === "track.create" ?
    <p>{username} created a track page for <span>{track.name}</span>!</p> :
    <p>{username} updated the track page for <span>{track.name}</span>.</p>

  return (
    <li>
      <Link to={`/tracks/${track.id}`}>
        <div className="activity-image" />
        {textComponent}
      </Link>
    </li>
  )
};

export default TrackActivityPanel;