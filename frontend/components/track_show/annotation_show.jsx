import React from 'react';

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

  render() {
    const show = Boolean(this.props.match.params.annotationId.match(/^[0-9]/));
    const annotationId = this.props.match.params.annotationId;

    const lyricsContainer = document.getElementById("lyrics-rect");
    const span = document.getElementById(this.props.match.params.annotationId);

    let style
    if (span) {
      const top1 = lyricsContainer.getBoundingClientRect().top;
      const top2 = span.getBoundingClientRect().top;
      style = { marginTop: `${Math.max(top2 - top1, 0)}px` };
    } else {
      style = { marginTop: `${this.props.top}px` };
    }

    if (!this.props.annotations[annotationId]) { return (<div></div>)};

    return show ? 
      (<div className="annotation-show-container" style={style}>
        <h3>Prodigy Annotation</h3>
        <p>{this.props.annotations[annotationId].body}</p>
        <button className="annotation-delete" onClick={this.deleteButton}>Delete</button>
      </div>) 
      : (<div></div>)
  }
};

export default AnnotationShow;