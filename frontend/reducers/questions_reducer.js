import { merge } from 'lodash';
import { CLEAR_QUESTIONS, RECEIVE_QUESTION, RECEIVE_QUESTIONS, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_ANSWER, REMOVE_ANSWER} from '../actions/answer_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case CLEAR_QUESTIONS:
      return {};
    case RECEIVE_QUESTIONS:
      return merge({}, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, { [action.question.id]: action.question });
    case REMOVE_QUESTION:
      if (newState[action.question.id]) delete newState[action.question.id];
      return newState;
    case RECEIVE_ANSWER:
      const questionId = action.answer.question_id;
      newState[questionId].answer = action.answer;
      return newState;
    case REMOVE_ANSWER:
      const questionId = action.answer.question_id;
      newState[questionId].answer = null;
      return newState;
    default:
      return state;
  }
}

export default questionsReducer;