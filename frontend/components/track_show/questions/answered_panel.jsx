import React, { useState, useEffect } from 'react';
import QuestionUpvotes from './upvotes';
import AnswerBody from './answer_body';
import autosize from 'autosize';

const AnsweredPanel = props => {
  const { question, updateAnswer, deleteAnswer, currentUserId } = props;
  const [editing, setEditing] = useState(false);
  const [onceFocused, setOnceFocused] = useState(false);
  const [body, setBody] = useState(question.answer.body);
  let textarea;
  useEffect(() => {
    if (textarea !== undefined && !onceFocused) {
      textarea.focus();
      autosize(textarea);
      setOnceFocused(true);
    }
  });

  return (
    <li className="answered-panel">
      { !editing && 
        <div className="answered-panel-show">
          <h4>{question.title}</h4>
          <AnswerBody answer={ question.answer } />
          { currentUserId && <div className="answered-panel-bottom">
            <QuestionUpvotes answerId={question.answer.id}/> 
            <div>
              <button onClick={() => { const result = confirm("Delete answer?"); 
                if(result) deleteAnswer(question.answer.id) } }>
                  <i className="far fa-trash-alt"/></button>
            <button onClick={() => setEditing(true)}><i className="fas fa-pencil-alt" /></button>
            </div>
          </div> }
        </div>
      }
      { editing && 
        <form onSubmit={e => {
          e.preventDefault();
          updateAnswer({ body, id: question.answer.id })
            .then(() => { setEditing(false); setOnceFocused(false) });
        }}>
            <textarea
              onChange={e => setBody(e.target.value)}
              value={body}
              ref={node => textarea = node}
              placeholder="Answer here" />
            <div className="answer-buttons">
              <button className="question-submit">Submit</button>
              <button
                className="question-cancel"
                onClick={e => { e.stopPropagation(); setEditing(false); setOnceFocused(false) }}>
                Cancel</button>
            </div>
        </form>
      }
    </li>
  )
};

export default AnsweredPanel;