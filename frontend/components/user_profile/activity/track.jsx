import React from 'react';
import { Link } from 'react-router-dom';

const TrackActivityPanel = props => {
  const { activity, username } = props;
  const track = activity.trackable;
  const textComponent = activity.key === "track.create" ?
    <p>{username} created a track page for <span>{track.name}</span>!</p> :
    <p>{username} updated the track page for <span>{track.name}</span>.</p>


  let style;
  if (track.image_url) {
    style = {
      backgroundImage: `url(${track.image_url})`
    };
  } else {
    style = null;
  }

  return (
    <li className="activity-panel">
      <Link to={`/tracks/${track.id}`}>
        <div className="activity-image" style={style}/>
        {textComponent}
      </Link>
    </li>
  )
};

export default TrackActivityPanel;