import React from 'react';

const CommentListItem = props => {

  const { username, body, profile_img, date } = props.comment

  return (
    <li className="comments-list-li">
      <div className="comment-container">
        <div className="comment-meta-row">
          <span>{username}</span>
          <span>{date}</span>
        </div>
        <p className="comment-body">{body}</p>
      </div>
    </li>
  )
}

export default CommentListItem;