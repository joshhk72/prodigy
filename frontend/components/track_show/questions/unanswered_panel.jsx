import React, { useState, useEffect } from 'react';
import autosize from 'autosize';

const UnansweredPanel = props => {
  const { question, createAnswer, deleteQuestion } = props;
  const [focused, setFocused] = useState(false);
  const [body, setBody] = useState('');
  let textarea;

  useEffect(() => {
    if (textarea !== undefined) {
      textarea.focus();
      autosize(textarea);
    }
  });

  return (
    <li className="unanswered-panel">
      {!focused && <h4>{question.title}</h4> }
      <form onSubmit={ e => {
        createAnswer({ body, question_id: question.id })
          .then(() => { setBody(''); setFocused(false) });
      } }>
      {focused ?
        <textarea
          onChange={ e => setBody(e.target.value) }
          value={body}
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
              onClick={ e => { e.stopPropagation(); setFocused(false) } }>
                Cancel</button>
            <button 
              className="question-delete" 
              onClick={ e => { e.stopPropagation(); deleteQuestion(question.id) } }>
                Delete Question</button>
          </div>
        }
      </form>
    </li>
  )
};

export default UnansweredPanel;