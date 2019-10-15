import React from 'react';

const CommentListItem = props => {

  const { username, body, profile_img, date, id, author_id } = props.comment

  const deleteButton = props.currentUser.id === author_id ? 
    <a onClick={() => props.deleteComment(id)}>
      <i className="fas fa-trash-alt" /></a> : <div></div>;

  return (
    <li className="comments-list-li">
      <div className="comment-container">
        <div className="comment-meta-row">
          <div className="comment-user-meta">
            <img className="comment-profile-img" 
              onError={function () { this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}}
              src={profile_img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
            />
            <span className="comment-username">{username}</span>
          </div>
          <span className="comment-date">{date}</span>
        </div>
        <p className="comment-body">{body}</p>
        <div className="comment-bottom">
          <div></div>
          { deleteButton }
        </div>
      </div>
    </li>
  )
}

export default CommentListItem;