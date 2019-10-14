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
    console.log("state");
    console.log(this.state);
    this.props.removeAnnotation(this.state.id);
    this.props.destroyForm(this.state.id);
  }

  render() {
    const placeholdText = "Don't just put the lyric in your own words-drop some knowledge!";
    return (
      <div className="annotation-form-container">
        <form className={"annotation-form"} >
          <textarea placeholder={placeholdText} />
          <button className="save-annotation" onClick={this.handleSave}>Save</button>
          <button className="cancel-annotation" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
};

export default AnnotationForm;
