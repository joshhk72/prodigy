import React from 'react';

const ActivityPanel = props => {
  const { activity } = props;
  switch (activity.trackable_type) {
    case "Album":
      return <Album activity={activity} />
    case "Artist":
      return <Artist activity={activity} />
    case "Track":
      return <Track activity={activity} />
    case "Comment":
      return <Track activity={activity} />
    case "Upvote":
      return <Track activity={activity} />
    case "Annotation":
      return <Annotation activity={activity} />
    case "Question":
      return <Question activity={activity} />
  }

};

export default ActivityPanel;