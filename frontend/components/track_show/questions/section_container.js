import { connect }  from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearQuestions, createQuestion, deleteQuestion, fetchTrackQuestions } from '../../../actions/question_actions';
import { createAnswer, deleteAnswer, updateAnswer } from '../../../actions/answer_actions';
import QuestionSection from './section';

const mapStateToProps = (state, ownProps) => ({
  questions: state.entities.questions,
  currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  fetchTrackQuestions: trackId => dispatch(fetchTrackQuestions(trackId)),
  clearQuestions: () => dispatch(clearQuestions()),
  createQuestion: question => dispatch(createQuestion(question)),
  deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
  updateAnswer: answer => dispatch(updateAnswer(answer))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionSection));