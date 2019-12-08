import React from 'react';
import Album from './album';
import Track from './track';
import Artist from './artist';
import Other from './other';

const ActivityPanel = props => {
  const { activity, username } = props;
  switch (activity.trackable_type) {
    case "Album":
      return <Album username={username} activity={activity} />
    case "Artist":
      return <Artist username={username} activity={activity} />
    case "Track":
      return <Track username={username} activity={activity} />
    default:
      return <Other username={username} activity={activity} />
  }

};

export default ActivityPanel;