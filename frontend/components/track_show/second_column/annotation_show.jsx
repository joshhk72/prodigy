import React from 'react';
import * as AnnotateUtil from '../../../util/annotate_util';
import * as UpvoteUtil from '../../../util/upvote_util';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.reverseUpvote = this.reverseUpvote.bind(this);
    this.deleteUpvote = this.deleteUpvote.bind(this);
  }

  componentDidMount() {
    this.props.fetchAnnotationUpvotes(this.props.match.params.annotationId);
  }

  deleteButton() {
    const annotationId = this.props.match.params.annotationId;
    this.props.deleteAnnotation(annotationId)
      .then(() => this.props.history.push(`/tracks/${this.props.match.params.trackId}`));
  }

  upvote(e) {
    e.preventDefault();
    const { id } = this.props.annotation;
    const { currentUser } = this.props;
    this.props.createUpvote({ value: 1, user_id: currentUser.id, upvotable_type: "Annotation", upvotable_id: id });
  }

  downvote(e) {
    e.preventDefault();
    const { id } = this.props.annotation;
    const { currentUser } = this.props;
    this.props.createUpvote({ value: -1, user_id: currentUser.id, upvotable_type: "Annotation", upvotable_id: id });
  }

  reverseUpvote(e) {
    e.preventDefault();
    this.props.reverseUpvote(this.currentUpvote.id);
  }

  deleteUpvote(e) {
    e.preventDefault();
    this.props.deleteUpvote(this.currentUpvote.id);
  }

  handleNothing() {
    e.preventDefault();
  }

  render() {
    const { currentUser, upvotes } = this.props;
    const currentAnnotation = this.props.annotation;
    const show = Boolean(currentAnnotation && String(currentAnnotation.id).match(/^[0-9]/));
    const style = AnnotateUtil.displayHeightStyle(this.props.match.params.annotationId, this.props.top);

    const annotationUpvotes = UpvoteUtil.annotationUpvotes(upvotes, Number(this.props.match.params.annotationId));
    const upvoteCount = UpvoteUtil.count(annotationUpvotes);
    const sign = UpvoteUtil.determineSign(upvoteCount);
    this.currentUpvote = UpvoteUtil.currentUpvote(annotationUpvotes, currentUser);
    const [leftCb, rightCb] = UpvoteUtil.determineCallbacks(this.currentUpvote, currentUser, this.upvote, this.downvote, this.deleteUpvote, this.reverseUpvote, this.handleNothing);
    const [leftClass, rightClass] = UpvoteUtil.determineClasses(this.currentUpvote);

    return show ? 
      (<div className="annotation-show-container annotation-show" style={style}>
        <h3 className="annotation-show">Prodigy Annotation</h3>
        <p className="annotation-show">{currentAnnotation.body}</p>
        {this.props.currentUserId === currentAnnotation.author_id && 
          <button 
            className="annotation-delete annotation-show" 
            onClick={this.deleteButton}
          >Delete</button>}
        <div className="annotation-show-bottom annotation-show">
          <a className="upvote-link" onClick={leftCb}><i className={`far fa-thumbs-up ${leftClass} annotation-show`} /></a>
          <span className="upvote-count annotation-show">{sign}{upvoteCount}</span>
          <a className="upvote-link" onClick={rightCb}><i className={`far fa-thumbs-down fa-flip-horizontal ${rightClass} annotation-show`} /></a>
        </div>
      </div>
      ) : (<div></div>)
  }
};

export default AnnotationShow;