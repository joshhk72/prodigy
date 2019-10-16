import React from 'react';

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

  handleNothing() {

  }

  render() {
    const { username, body, profile_img, date, id, author_id } = this.props.comment

    const deleteButton = this.props.currentUser && this.props.currentUser.id === author_id ? 
      <a onClick={() => this.props.deleteComment(id)}>
        <i className="fas fa-trash-alt" /></a> 
      : <div></div>;
    const commentUpvotes = this.props.upvotes.filter(upvote => {
      return upvote.upvotable_type === "Comment" && upvote.upvotable_id === this.props.comment.id;
    });
    const upvoteCount = commentUpvotes.reduce((acc, upvote) => acc + upvote.value, 0);

    let sign;
    if (upvoteCount === 1) {
      sign = "+";
    } else if (upvoteCount === -1) {
      sign = "";
    } else {
      sign = " "; 
    }

    const upvoted = commentUpvotes.some(upvote => this.props.currentUser && upvote.user_id === this.props.currentUser.id);
    if (upvoted) {
      this.currentUpvote = commentUpvotes.find(upvote => upvote.user_id === this.props.currentUser.id);
    } else {
      this.currentUpvote = undefined;
    }
    
    let leftCb, rightCb, leftClass, rightClass
    if (this.currentUpvote) {
      if (this.currentUpvote.value === 1) {
        leftCb = this.deleteUpvote;
        rightCb = this.reverseUpvote;
        leftClass = "green-up";
        rightClass = "";
      } else {
        leftCb = this.reverseUpvote;
        rightCb = this.deleteUpvote;
        leftClass = "";
        rightClass = "red-down"    
      }
    } else if (this.props.currentUser) {
      leftCb = this.upvote;
      rightCb = this.downvote;
      leftClass = "";
      rightClass = "";
    } else {
      leftCb = this.handleNothing;
      rightCb = this.handleNothing;
      leftClass = "";
      rightClass = "";
    }
    
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
            <div>
              <a onClick={leftCb}><i className={`far fa-thumbs-up ${leftClass}`} /></a>
              <span className="upvote-count">{sign}{upvoteCount}</span>
              <a onClick={rightCb}><i className={`far fa-thumbs-down fa-flip-horizontal ${rightClass}`} /></a>
            </div>
            { deleteButton }
          </div>
        </div>
      </li>
    )
  }
}

export default CommentListItem;