import React, { useState, useEffect } from 'react';
import autosize from 'autosize';

const UnansweredPanel = props => {
  const { question, createAnswer, deleteQuestion } = props;
  const [focused, setFocused] = useState(false);
  const [onceFocused, setOnceFocused] = useState(false);
  const [body, setBody] = useState('');
  let textarea;
  useEffect(() => {
    if (textarea !== undefined && !onceFocused) {
      textarea.focus();
      autosize(textarea);
      setOnceFocused(true);
    }
  });

  return (
    <li className="unanswered-panel">
      {!focused && <h4>{question.title}</h4> }
      <form onSubmit={ e => {
        e.preventDefault();
        createAnswer({ body, question_id: question.id })
          .then(() => { setBody(''); setFocused(false); setOnceFocused(false) });
      } }>
      {focused ?
        <textarea
          onChange={ e => setBody(e.target.value) }
          value={body}
          required={true}
          ref={node => textarea = node}
          placeholder={`${question.title}`} /> :
        <input
          type="text"
          placeholder="Answer here"
          onFocus={() => setFocused(true)} />
      }
        {focused &&
          <div className="question-buttons">
            <button className="question-submit">Submit</button>
            <button 
              className="question-cancel" 
              onClick={ e => { e.stopPropagation(); setFocused(false); setOnceFocused(false) } }>
                Cancel</button>
            { !question.permanent && <button 
              className="question-delete" 
              onClick={e => { e.stopPropagation(); e.preventDefault(); const result = confirm("Delete question?"); if(result) deleteQuestion(question.id) } }>
              Delete</button> }
          </div>
        }
      </form>
    </li>
  )
};

export default UnansweredPanel;