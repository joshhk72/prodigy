import React from 'react';
import CommentListItem from './list_item';

class CommentColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearComments();
    this.props.fetchTrackComments(this.props.currentTrack.id);
  }

  render() {
    console.dir(this.props.comments);
    const commentLis = Object.values(this.props.comments).map(comment => {
      return <CommentListItem comment={comment} key={comment.id} />
    });

    return (
      <div className="comments-column">
        <ul className="comments-list">
          {commentLis}
        </ul>
      </div>
    )
  }
};

export default CommentColumn;