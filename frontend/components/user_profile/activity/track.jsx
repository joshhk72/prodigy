import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from 'assets/images/no_image.png';

const TrackActivityPanel = props => {
  const { activity, username } = props;
  const track = activity.trackable;
  const textComponent = activity.key === "track.create" ?
    <p>{username} created a track page for <span>{track.name}</span>!</p> :
    <p>{username} updated the track page for <span>{track.name}</span>.</p>


  const style = {
    backgroundImage: `url(${track.image_url || defaultImage})`
  };

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