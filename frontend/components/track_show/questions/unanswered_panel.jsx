import React, { useState, useEffect } from 'react';
import autosize from 'autosize';

const UnansweredPanel = props => {
  const { question, createAnswer, deleteQuestion } = props;
  const [focused, setFocused] = useState(false);
  let textarea;
  useEffect(() => {
    if (textarea !== undefined) {
      textarea.focus();
      autosize(textarea);
    }
  });

  return (
    <li>
      {!focused && <h4>{question.title}</h4> }
      {focused ?
        <textarea
          ref={node => textarea = node}
          placeholder="Answer here" /> :
        <input
          type="text"
          placeholder="Answer here"
          onFocus={() => setFocused(true)} />
      }
      {focused &&
        <div className="answer-buttons">
          <button className="answer-submit">Submit</button>
          <button 
            className="answer-cancel" 
            onClick={() => setFocused(false)}>
              Cancel</button>
          <button 
            className="question-delete" 
            onClick={() => deleteQuestion(question.id)}>
              Delete Question</button>
        </div>
      }
    </li>
  )
};

export default UnansweredPanel;