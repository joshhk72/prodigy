import React, { useState, useEffect } from 'react';
import autosize from 'autosize';

const QuestionForm = props => {
  const { createQuestion, trackId } = props;
  let textarea;
  const [focused, setFocused] = useState(false);
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (textarea !== undefined) {
      textarea.focus();
      autosize(textarea);
    }
  });

  return (
    <form 
      className="question-form"
      onSubmit={ e => {
        e.preventDefault();
        createQuestion({ title, track_id: trackId })
          .then(() => {
            setTitle('');
            setFocused(false);
          })
      }}>
      <label>Ask us a question about this song</label>
      { focused ?
        <textarea
          onChange={e => setTitle(e.target.value)}
          value={title}
          ref={node => textarea = node} 
          placeholder="Ask a question" /> :
        <input 
          type="text" 
          placeholder="Ask a question" 
          onFocus={() => setFocused(true)} />
      }
      {focused && 
        <div className="question-buttons">
          <button className="question-submit">Submit</button>
          <button className="question-cancel" onClick={() => setFocused(false)}>Cancel</button>
        </div>
      }
    </form>
  )
};

export default QuestionForm;