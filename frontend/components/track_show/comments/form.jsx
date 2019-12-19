import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../actions/comment_actions';

const CommentForm = props => {
  const [commenting, setCommenting] = useState(false);
  const [body, setBody] = useState("");
  const { author, trackId } = props;
  const dispatch = useDispatch();
  const area = React.createRef();

  useEffect(() => {
    if (area.current) area.current.focus();
  },[commenting])

  const submitComment = e => {
    e.preventDefault();
    dispatch(createComment({ body, author_id: author.id, track_id: trackId }))
      .then(() => setBody(''));
  }

  const preform = (
    <div className="comment-form-container">
      <input
        placeholder="Add a comment"
        className="comment-pre" 
        type="text"
        onMouseDown={() => {
          setCommenting(true);
          setBody('');
        }} />
    </div>
  )

  const form = (
    <div className="comment-form-container">
      <form onSubmit={submitComment}>
        <textarea
          placeholder="Add a comment"
          className="comment-input"
          onChange={e => setBody(e.target.value)}
          ref={area}
          value={body} />
        <button>Submit</button>
      </form>
    </div>
  );

  return commenting ? form : preform
}

export default CommentForm;