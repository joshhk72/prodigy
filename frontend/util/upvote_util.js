export const commentUpvotes = (upvotes, commentId) => {
  return upvotes.filter(upvote => (
    upvote.upvotable_type === "Comment" && upvote.upvotable_id === commentId))
};

export const annotationUpvotes = (upvotes, annotationId) => {
  return upvotes.filter(upvote => (
    upvote.upvotable_type === "Annotation" && upvote.upvotable_id === annotationId))
};

export const answerUpvotes = (upvotes, answerId) => {
  return upvotes.filter(upvote => (
    upvote.upvotable_type === "Answer" && upvote.upvotable_id === answerId))
};

export const determineSign = upvoteCount => {
  let sign;
  if (upvoteCount > 0) {
    sign = "+";
  } else if (upvoteCount < 0) {
    sign = "";
  } else {
    sign = " ";
  }
  return sign;
};

export const count = upvotes => {
  return upvotes.reduce((acc, upvote) => acc + upvote.value, 0);
};

const isUpvotedByUser = (upvotes, currentUser) => {
  return upvotes.some(upvote => currentUser && upvote.user_id === currentUser.id);
};

export const currentUpvote = (upvotes, currentUser) => {
  const isUpvoted = isUpvotedByUser(upvotes, currentUser);
  if (!isUpvoted) { return undefined };
  return upvotes.find(upvote => upvote.user_id === currentUser.id);
};

export const determineCallbacks = (currentUpvote, currentUser, up, down, erase, reverse) => {
  let leftCb, rightCb;
  if (currentUpvote) {
    [leftCb, rightCb] = currentUpvote.value === 1 ? 
      [erase, reverse] : [reverse, erase];
  } else if (currentUser) {
    [leftCb, rightCb] = [up, down];
  } else {
    [leftCb, rightCb] = [() => {}, () => {}];
  }
  return [leftCb, rightCb];
};

export const determineClasses = (currentUpvote) => {
  let leftClass, rightClass;
  if (currentUpvote) {
    [leftClass, rightClass] = currentUpvote.value === 1 ?
      ["green-up", ""] : ["", "red-down"];
  } else {
    [leftClass, rightClass] = ["", ""];
  }
  return [leftClass, rightClass];
};