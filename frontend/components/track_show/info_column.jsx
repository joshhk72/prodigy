import React from 'react';
import * as AnnotateUtil from '../../util/annotate_util';
import AnnotationForm from './annotation_form';

class InfoColumn extends React.Component {
  constructor(props) {
    super(props);
    this.createAnnotationForm = this.createAnnotationForm.bind(this);
    this.state = { formNo: 0, forms: [] };
    this.destroyForm = this.destroyForm.bind(this);
  }

  destroyForm(id) {
    this.setState(prevState => {
      const forms = prevState.forms.filter(form => form.props.annotation.id !== id);
      return {
        forms
      }
    });
  }

  createAnnotationForm() {
    this.props.closeAnnotationPrompt();

    // Create form
    const temp = { id: `temp-${this.state.formNo}`, start_idx: this.props.startIdx, end_idx: this.props.endIdx, body: "", track_id: this.props.currentTrack.id };
    this.props.createTempAnnotation(temp);
    const form = <AnnotationForm 
      key={this.state.formNo} 
      removeAnnotation={this.props.removeAnnotation}
      destroyForm={this.destroyForm}
      annotation={temp}/>

    this.setState(prevState => ({
      formNo: prevState.formNo + 1,
      forms: prevState.forms.concat([form])
    }));
  }

  render() {
    return (
      <div id="info-column">
        { this.props.annotationPrompt && <button id="annotation-prompt-button" onClick={ this.createAnnotationForm }>Start the Genius Annotation</button> }
        { !this.props.annotationPropmpt && this.state.forms }  
      </div>
    );
  }
};

export default InfoColumn;