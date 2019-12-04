import React from 'react';

const AnswerBody = props => {
  const { answer } = props;
  const split = answer.body.split(/\r?\n/);
  const parsed = split.map((line, i) => {
    return <p key={String(answer.id) + '-' + String(i)}>{line}</p>
  })
  return (
    <div className="answer-body">
      {parsed}
    </div>
  )
};

export default AnswerBody;