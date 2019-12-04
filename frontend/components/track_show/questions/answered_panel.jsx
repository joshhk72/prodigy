import React, { useState } from 'react';
import QuestionUpvotes from './upvotes';

const AnsweredPanel = props => {
  const { question, updateAnswer, deleteAnswer } = props;
  const [updating, setUpdating] = useState(false);

  return (
    <li className="answered-panel">
      <h4>{question.title}</h4>
      <p>{question.answer.body}</p>
      <div className="answered-panel-bottom">
        <QuestionUpvotes answerId={question.answer.id}/> 
        <div></div>
      </div>
    </li>
  )
};

export default AnsweredPanel;