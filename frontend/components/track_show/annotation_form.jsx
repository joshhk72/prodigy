import React from 'react';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.annotation;
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.removeAnnotation(this.state.id);
    this.props.destroyForm(this.state.id);
  }

  handleSave(e) {
    e.preventDefault();
    this.props.createAnnotation(this.state)
      .then(() => {
        this.props.removeAnnotation(this.state.id);
        this.props.destroyForm(this.state.id);
      });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  render() {
    const placeholdText = "Don't just put the lyric in your own words-drop some knowledge!";
    return (
      <div className="annotation-form-container annotation-submit">
        <form className="annotation-form annotation-submit" >
          <textarea className="annotation-submit" placeholder={placeholdText} onChange={this.update("body")} value={this.state.body} />
          <button className="save-annotation" onClick={this.handleSave}>Save</button>
          <button className="cancel-annotation" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
};

export default AnnotationForm;
