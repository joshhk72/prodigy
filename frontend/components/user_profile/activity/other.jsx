import React from 'react';
import { Link } from 'react-router-dom';

const OtherActivityPanel = props => {
  const { activity, username } = props;
  const trackable = activity.trackable;
  const track = trackable.track;
  let style;
  if (track.image_url) {
    style = {
      backgroundImage: `url(${track.image_url})`
    };
  } else {
    style = null;
  }

  let textComponent;
  switch (activity.key) {
    case "question.create":
      textComponent = <p>{username} asked a question for <span>{track.name}</span>.</p>;
      break;
    case "answer.create":
      textComponent = <p>{username} answered a question for <span>{track.name}</span>.</p>;
      break;
    case "answer.update":
      textComponent = <p>{username} edited an answer to a question for <span>{track.name}</span>.</p>;
      break;
    case "comment.create":
      textComponent = <p>{username} commented on <span>{track.name}</span>.</p>;
      break;
    case "annotation.create":
      textComponent = <p>{username} added an annotation to <span>{track.name}</span>.</p>;
      break;
    case "annotation.update":
      textComponent = <p>{username} updated an annotation for <span>{track.name}</span>.</p>;
      break;
    case "upvote.create":
      if (trackable.upvotable_type === "Comment") {
        if (trackable.value === 1) {
          textComponent = <p>{username} upvoted a comment for <span>{track.name}</span>.</p>;
        } else {
          textComponent = <p>{username} downvoted a comment for <span>{track.name}</span>.</p>;
        }
      } else {
        if (trackable.value === 1) {
          textComponent = <p>{username} upvoted an annotation for <span>{track.name}</span>.</p>;
        } else {
          textComponent = <p>{username} downvoted an annotation for <span>{track.name}</span>.</p>;
        }
      }
      break;
    case "upvote.update":
      if (trackable.upvotable_type === "Comment") {
        if (trackable.value === 1) {
          textComponent = <p>{username} upvoted a comment for <span>{track.name}</span>.</p>;
        } else {
          textComponent = <p>{username} downvoted a comment for <span>{track.name}</span>.</p>;
        }
      } else {
        if (trackable.value === 1) {
          textComponent = <p>{username} upvoted an annotation for <span>{track.name}</span>.</p>;
        } else {
          textComponent = <p>{username} downvoted an annotation for <span>{track.name}</span>.</p>;
        }
      }
      break;
    default:
      textComponent = <p></p>;
      break;
  }
  return (
    <li className="activity-panel">
      <Link to={`/tracks/${track.id}`}>
        <div style={style} className="activity-image" />
        {textComponent}
      </Link>
    </li>
  )
};

export default OtherActivityPanel;