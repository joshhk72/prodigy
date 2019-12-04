import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAnswerUpvotes, createUpvote, deleteUpvote, reverseUpvote } from '../../../actions/upvote_actions';
import * as UpvoteUtil from '../../../util/upvote_util';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  upvotes: Object.values(state.entities.upvotes)
});

const mapDispatchToProps = dispatch => ({
  createUpvote: upvote => dispatch(createUpvote(upvote)),
  reverseUpvote: id => dispatch(reverseUpvote(id)),
  deleteUpvote: id => dispatch(deleteUpvote(id)),
  fetchAnswerUpvotes: answerId => dispatch(fetchAnswerUpvotes(answerId))
});

const QuestionUpvotes = props => {
  const { upvotes, currentUser, answerId, createUpvote, reverseUpvote, deleteUpvote, fetchAnswerUpvotes } = props;
  useEffect(() => {
    fetchAnswerUpvotes(answerId)
      .then(() => setLoaded(true));
  }, [])
  const [loaded, setLoaded] = useState(false);
  if (!loaded) return null;

  const handleNothing = () => {};
  const upvote = () => createUpvote({ value: 1, user_id: currentUser.id, upvotable_type: "Answer", upvotable_id: answerId });
  const downvote = () => createUpvote({ value: -1, user_id: currentUser.id, upvotable_type: "Answer", upvotable_id: answerId });
  const delUpvote = () => deleteUpvote(currentUpvote.id);
  const revUpvote = () => reverseUpvote(currentUpvote.id);
  // For handling upvotes. This is streamlined since upvotes are implemented
  // for many things across Prodigy (and also Genius).

  const answerUpvotes = UpvoteUtil.answerUpvotes(upvotes, answerId);
  const upvoteCount = UpvoteUtil.count(answerUpvotes);
  const sign = UpvoteUtil.determineSign(upvoteCount);
  const currentUpvote = UpvoteUtil.currentUpvote(answerUpvotes, currentUser);
  const [leftCb, rightCb] = UpvoteUtil.determineCallbacks(currentUpvote, currentUser, upvote, downvote, delUpvote, revUpvote, handleNothing);
  const [leftClass, rightClass] = UpvoteUtil.determineClasses(currentUpvote);

  return (
    <div>
      <a onClick={leftCb} className="upvote-link"><i className={`far fa-thumbs-up ${leftClass}`} /></a>
      <span className="upvote-count">{sign}{upvoteCount}</span>
      <a onClick={rightCb} className="upvote-link"><i className={`far fa-thumbs-down fa-flip-horizontal ${rightClass}`} /></a>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionUpvotes);