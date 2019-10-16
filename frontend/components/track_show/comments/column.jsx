import React from 'react';
import CommentListItemContainer from './list_item_container';
import CommentForm from './form';

class CommentColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearComments();
    this.props.fetchTrackComments(this.props.currentTrack.id);
  }

  render() {
    const commentLis = Object.values(this.props.comments).map(comment => {
      return <CommentListItemContainer 
        comment={comment}
        key={comment.id} />
    });

    return (
      <div className="comments-column">
        <CommentForm 
          trackId={this.props.currentTrack.id}
          author={this.props.currentUser}
          submitComment={this.props.createComment}
        />
        <ul className="comments-list">
          {commentLis}
        </ul>
      </div>
    )
  }
};

export default CommentColumn;