import { merge } from 'lodash';
import { CLEAR_QUESTIONS, RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_ANSWER, REMOVE_ANSWER} from '../actions/answer_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  let questionId;
  if (action.answer) questionId = action.answer.question_id;
  switch (action.type) {
    case CLEAR_QUESTIONS:
      return {};
    case RECEIVE_QUESTIONS:
      return merge({}, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, { [action.question.id]: action.question });
    case REMOVE_QUESTION:
      if (newState[action.questionId]) delete newState[action.questionId];
      return newState;
    case RECEIVE_ANSWER:
      newState[questionId].answer = action.answer;
      return newState;
    case REMOVE_ANSWER:
      newState[questionId].answer = null;
      return newState;
    default:
      return state;
  }
}

export default questionsReducer;