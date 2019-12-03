import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

const removeQuestion = questionId => ({
  type: REMOVE_QUESTION,
  questionId
});

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS
});

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const fetchTrackQuestions = trackId => dispatch => {
  return QuestionAPIUtil.fetchTrackQuestions(trackId)
    .then(questions => dispatch(receiveQuestions(questions)));
};

export const createQuestion = question => dispatch => {
  return QuestionAPIUtil.createQuestion(question)
    .then(question => dispatch(receiveQuestion(question)));
};

export const deleteQuestion = questionId => dispatch => {
  return QuestionAPIUtil.deleteQuestion(questionId)
    .then(question => dispatch(removeQuestion(question.id)));
}