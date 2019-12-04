import React, { useState, useEffect } from 'react';
import QuestionUpvotes from './upvotes';
import autosize from 'autosize';

const AnsweredPanel = props => {
  const { question, updateAnswer, deleteAnswer } = props;
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(question.answer.body);
  let textarea;
  useEffect(() => {
    if (textarea !== undefined) {
      textarea.focus();
      autosize(textarea);
    }
  });

  return (
    <li className="answered-panel">
      { !editing && 
        <div>
          <h4>{question.title}</h4>
          <p>{question.answer.body}</p>
          <div className="answered-panel-bottom">
            <QuestionUpvotes answerId={question.answer.id}/> 
            <div>
              <button onClick={ () => deleteAnswer(question.answer.id)}>Delete</button>
              <button onClick={ () => setEditing(true) }>Update</button>
            </div>
          </div>
        </div>
      }
      { editing && 
        <form onSubmit={e => {
          updateAnswer({ body, id: question.answer.id })
            .then(() => { setEditing(false) });
        }}>
            <textarea
              onChange={e => setBody(e.target.value)}
              value={body}
              ref={node => textarea = node}
              placeholder="Answer here" /> :
            <div className="answer-buttons">
              <button className="answer-submit">Submit</button>
              <button
                className="answer-cancel"
                onClick={e => { e.stopPropagation(); setEditing(false) }}>
                Cancel</button>
            </div>
        </form>
      }
    </li>
  )
};

export default AnsweredPanel;