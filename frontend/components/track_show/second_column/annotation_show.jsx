import React from 'react';
import * as AnnotateUtil from '../../../util/annotate_util';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton() {
    const annotationId = this.props.match.params.annotationId;
    this.props.deleteAnnotation(annotationId)
      .then(() => this.props.history.push(`/tracks/${this.props.match.params.trackId}`));
  }

  upvote() {
    const { id } = this.props.annotation;
    const { currentUser } = this.props;
    this.props.createUpvote({ value: 1, user_id: currentUser.id, upvotable_type: "Annotation", upvotable_id: id });
  }

  downvote() {
    const { id } = this.props.annotation;
    const { currentUser } = this.props;
    this.props.createUpvote({ value: -1, user_id: currentUser.id, upvotable_type: "Annotation", upvotable_id: id });
  }

  reverseUpvote() {
    this.props.reverseUpvote(this.currentUpvote.id);
  }

  deleteUpvote() {
    this.props.deleteUpvote(this.currentUpvote.id);
  }

  handleNothing() {
  }

  render() {
    const currentAnnotation = this.props.annotation;
    const show = Boolean(currentAnnotation && String(currentAnnotation.id).match(/^[0-9]/));
    const style = AnnotateUtil.displayHeightStyle(this.props.match.params.annotationId, this.props.top);

    

    return show ? 
      (<div className="annotation-show-container annotation-show" style={style}>
        <h3 className="annotation-show">Prodigy Annotation</h3>
        <p className="annotation-show">{currentAnnotation.body}</p>
        {this.props.currentUserId === currentAnnotation.author_id && 
          <button 
            className="annotation-delete annotation-show" 
            onClick={this.deleteButton}
          >Delete</button>}
      </div>) 
      : (<div></div>)
  }
};

export default AnnotationShow;