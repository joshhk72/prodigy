import React from 'react';

const AnsweredPanel = props => {
  const { question } = props;

  return (
    <li>
      <h4>{question.title}</h4>
      <p>{question.answer.body}</p>
    </li>
  )
};

export default AnsweredPanel;