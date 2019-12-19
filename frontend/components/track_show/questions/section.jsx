import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionForm from './form';
import AnsweredPanel from './answered_panel';
import UnansweredPanel from './unanswered_panel';
import { Link, withRouter } from 'react-router-dom';
import { partition } from 'lodash';
import { 
  clearQuestions, 
  createQuestion, 
  deleteQuestion, 
  fetchTrackQuestions 
} from '../../../actions/question_actions';
import { 
  createAnswer, 
  deleteAnswer, 
  updateAnswer 
} from '../../../actions/answer_actions';

const QuestionSection = props => {
  const [questions, setQuestions] = useState([]);
  const [answeredQuestions, unansweredQuestions] = partition(questions, q => q.answer);
  const dispatch = useDispatch();
  const currentQuestions = useSelector(state => state.entities.questions);
  const currentUserId = useSelector(state => state.session.id);
  
  useEffect(() => {
    dispatch(clearQuestions());
    dispatch(fetchTrackQuestions(props.match.params.trackId))
      .then(res => setQuestions(res.questions));
  }, []);

  useEffect(() => {
    setQuestions(currentQuestions);
  }, [currentQuestions]);
  
  const answeredPanels = answeredQuestions.map(q => 
    <AnsweredPanel key={q.id}
      question={q}
      updateAnswer={answer => dispatch(updateAnswer(answer))}
      deleteAnswer={id => dispatch(deleteAnswer(id))} 
      currentUserId={currentUserId}/>);
  const unansweredPanels = unansweredQuestions.map(q => 
    <UnansweredPanel key={q.id} 
      question={q} 
      createAnswer={answer => dispatch(createAnswer(answer))} 
      deleteQuestion={id => dispatch(deleteQuestion(id))} />);

  return (
    <div className="question-section">
      <ul className="answered-questions-list">
        { answeredPanels }
      </ul>
      { currentUserId && <ul className="unanswered-questions-list">
        { unansweredPanels }
      </ul> }
      { currentUserId && 
        <QuestionForm 
          createQuestion={question => dispatch(createQuestion(question))} 
          trackId={props.match.params.trackId} 
        /> 
      }
      { currentUserId && 
        <p className="question-info">
          Annotations and answers for questions use the <a target="_blank" href="http://demo.showdownjs.com/">Showdown </a> Markdown converter library!
          Also check out the <Link to="/format" target="_blank">formatting help page</Link>.
        </p>
      }
    </div>
  )
};

export default withRouter(QuestionSection);