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

    if (!this.props.annotations[annotationId]) { return (<div></div>)};

    return show ? 
      (<div>
        <h3>Prodigy Annotation</h3>
        <p>{this.props.annotations[annotationId].body}</p>
        <button onClick={this.deleteButton}>Delete</button>
      </div>) 
      : (<div></div>)
  }
};

export default AnnotationShow;