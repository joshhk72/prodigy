import React from 'react';
import autosize from 'autosize';
import { merge } from 'lodash';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.annotation, { author_id: this.props.authorId });
    this.top = this.props.top;
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.textarea = React.createRef();
  }

  componentDidMount() {
    autosize(this.textarea.current);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.removeAnnotation(this.state.id);
    this.props.destroyForm(this.state.id);
    this.props.history.push(`/tracks/${this.props.match.params.trackId}`);
  }

  handleSave(e) {
    e.preventDefault();
    this.props.createAnnotation(this.state)
      .then((res) => {
        this.props.removeAnnotation(this.state.id);
        this.props.destroyForm(this.state.id);
        this.props.history.push(`/tracks/${this.props.match.params.trackId}/${res.annotation.id}`)
      });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  render() {
    const span = document.getElementById(this.state.id);
    const lyricsContainer = document.getElementById("lyrics-rect");

    let style;
    if (span) {
      const top1 = lyricsContainer.getBoundingClientRect().top;
      const top2 = span.getBoundingClientRect().top;
      style = { marginTop: `${Math.max(top2 - top1 - 50, 0)}px` };
    } else {
      style = { marginTop: `${this.top - 50}px` };
    }
    const placeholdText = "Don't just put the lyric in your own words-drop some knowledge!";
    return (
      <div style={style} className="annotation-form-container annotation-submit">
        <form className="annotation-form annotation-submit" >
          <textarea ref={this.textarea} className="annotation-submit" placeholder={placeholdText} onChange={this.update("body")} value={this.state.body} />
          <button className="save-annotation" onClick={this.handleSave}>Save</button>
          <button className="cancel-annotation" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
};

export default AnnotationForm;
