import React, { useState, useEffect } from 'react';
import QuestionForm from './form';
import AnsweredPanel from './answered_panel';
import UnansweredPanel from './unanswered_panel';
import { partition } from 'lodash';

const QuestionSection = props => {
  const { 
    createQuestion, clearQuestions, 
    fetchTrackQuestions, deleteQuestion, updateAnswer,
    createAnswer, deleteAnswer, currentUserId
  } = props;
  const [questions, setQuestions] = useState([]);
  const [answeredQuestions, unansweredQuestions] = partition(questions, q => q.answer);
  useEffect(() => {
    clearQuestions();
    fetchTrackQuestions(props.match.params.trackId)
      .then(res => setQuestions(res.questions));
  }, []);

  useEffect(() => {
    setQuestions(props.questions);
  }, [props.questions]);
  
  const answeredPanels = answeredQuestions.map(q => 
    <AnsweredPanel key={q.id}
      question={q}
      updateAnswer={updateAnswer}
      deleteAnswer={deleteAnswer} 
      currentUserId={currentUserId}/>);
  const unansweredPanels = unansweredQuestions.map(q => 
    <UnansweredPanel key={q.id} 
      question={q} 
      createAnswer={createAnswer} 
      deleteQuestion={deleteQuestion} />);

  return (
    <div className="question-section">
      <ul className="answered-questions-list">
        { answeredPanels }
      </ul>
      { currentUserId && <ul className="unanswered-questions-list">
        { unansweredPanels }
      </ul> }
      { currentUserId && <QuestionForm createQuestion={createQuestion} trackId={props.match.params.trackId} /> }
      { currentUserId && 
        <p className="question-info">
          Answers for questions use the <a target="_blank" href="http://demo.showdownjs.com/">Showdown </a> Markdown converter library!
          Check it out for more info.
        </p>
      }
    </div>
  )
};

export default QuestionSection;