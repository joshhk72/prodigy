import React from 'react';
import * as UpvoteUtil from '../../../util/upvote_util';
import defaultProfileImage from 'assets/images/default-profile.jpg';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.reverseUpvote = this.reverseUpvote.bind(this);
    this.deleteUpvote = this.deleteUpvote.bind(this);
  }

  componentDidMount() {
    this.props.fetchCommentUpvotes(this.props.comment.id);
  }

  upvote() {
    const { id } = this.props.comment;
    const { currentUser } = this.props;
    this.props.createUpvote({value: 1, user_id: currentUser.id, upvotable_type: "Comment", upvotable_id: id });
  }

  downvote() {
    const { id } = this.props.comment;
    const { currentUser } = this.props;
    this.props.createUpvote({ value: -1, user_id: currentUser.id, upvotable_type: "Comment", upvotable_id: id });
  }

  reverseUpvote() {
    this.props.reverseUpvote(this.currentUpvote.id);
  }

  deleteUpvote() {
    this.props.deleteUpvote(this.currentUpvote.id);
  }

  render() {
    const { username, body, profile_img, date, id, author_id } = this.props.comment
    const { currentUser, deleteComment, upvotes } = this.props;

    const deleteButton = currentUser && currentUser.id === author_id ? 
      <a onClick={() => { const result = confirm("Delete this comment?"); if (result) deleteComment(id) } }>
        <i className="fas fa-trash-alt" /></a> 
      : <div></div>;

    // For handling upvotes. This is streamlined since upvotes are implemented
    // for many things across Prodigy (and also Genius). 
    const commentUpvotes = UpvoteUtil.commentUpvotes(upvotes, id);
    const upvoteCount = UpvoteUtil.count(commentUpvotes);
    const sign = UpvoteUtil.determineSign(upvoteCount);
    this.currentUpvote = UpvoteUtil.currentUpvote(commentUpvotes, currentUser);
    const [leftCb, rightCb] = UpvoteUtil.determineCallbacks(this.currentUpvote, currentUser, this.upvote, this.downvote, this.deleteUpvote, this.reverseUpvote);
    const [leftClass, rightClass] = UpvoteUtil.determineClasses(this.currentUpvote);

    return (
      <li>
        <div className="comment-container">
          <div className="comment-meta-row">
            <div className="comment-user-meta">
              <img className="comment-profile-img" 
                onError={function () { this.src = defaultProfileImage}}
                src={profile_img || defaultProfileImage}
              />
              <span>{username}</span>
            </div>
            <span className="comment-date">{date}</span>
          </div>
          <p className="comment-body">{body}</p>
          <div className="comment-bottom">
            <div>
              <a onClick={leftCb} className="upvote-link"><i className={`far fa-thumbs-up ${leftClass}`} /></a>
              <span className="upvote-count">{sign}{upvoteCount}</span>
              <a onClick={rightCb} className="upvote-link"><i className={`far fa-thumbs-down fa-flip-horizontal ${rightClass}`} /></a>
            </div>
            { deleteButton }
          </div>
        </div>
      </li>
    )
  }
}

export default CommentListItem;