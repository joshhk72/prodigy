import * as AnswerAPIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

const removeAnswer = answerId => ({
  type: REMOVE_ANSWER,
  answerId
});

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

export const createAnswer = answer => dispatch => {
  return AnswerAPIUtil.createAnswer(answer)
    .then(answer => dispatch(receiveAnswer(answer)));
};

export const deleteAnswer = answerId => dispatch => {
  return AnswerAPIUtil.deleteAnswer(answerId)
    .then(answer => dispatch(removeAnswer(answer.id)));
}