import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrackComments, clearComments } from '../../../actions/comment_actions';
import CommentListItemContainer from './list_item_container';
import CommentForm from './form';

const CommentColumn = props => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.entities.comments);
  const currentUser = useSelector(state => state.entities.users[state.session.id]);

  useEffect(() => {
    dispatch(clearComments());
    dispatch(fetchTrackComments(props.currentTrack.id));
  }, [])

  const commentLis = Object.values(comments).map(comment => {
    return <CommentListItemContainer 
      comment={comment}
      key={comment.id} />
  });

  return (
    <div className="comments-column">
      { currentUser && <CommentForm 
        trackId={props.currentTrack.id}
        author={currentUser}
      /> }
      <ul className="comments-list">
        {commentLis}
      </ul>
    </div>
  )
};

export default CommentColumn;