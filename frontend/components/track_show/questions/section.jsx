import React, { useState, useEffect } from 'react';
import QuestionForm from './form';

const QuestionSection = props => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    props.clearQuestions();
    props.fetchTrackQuestions(props.match.params.trackId)
      .then(questions => setQuestions(questions));
  }, [])

  return (
    <div className="question-section">
      <ul className="question-panel-list">

      </ul>
      <QuestionForm createQuestion={props.createQuestion} />
    </div>
  )
};

export default QuestionSection;