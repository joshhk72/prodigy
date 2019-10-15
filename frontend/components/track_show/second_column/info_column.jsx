import React from 'react';
import * as AnnotateUtil from '../../../util/annotate_util';
import AnnotationShow from './annotation_show';
import AnnotationForm from './annotation_form';
import { Route } from 'react-router-dom';

class InfoColumn extends React.Component {
  constructor(props) {
    super(props);
    this.createAnnotationForm = this.createAnnotationForm.bind(this);
    this.state = { formNo: 0, forms: [] };
    this.destroyForm = this.destroyForm.bind(this);
  }

  destroyForm(id) {
    this.setState(prevState => {
      const forms = prevState.forms.filter(form => form.props.path.split('/')[3] !== id);
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

    const routedForm = <Route
      path={`/tracks/:trackId/${temp.id}`}
      key={temp.id}
      render={props => <AnnotationForm {...props}
        removeAnnotation={this.props.removeAnnotation}
        createAnnotation={this.props.createAnnotation}
        destroyForm={this.destroyForm}
        top={this.props.top}
        authorId={this.props.currentUserId}
        annotation={temp} />
      } />

    this.setState(prevState => ({
      formNo: prevState.formNo + 1,
      forms: prevState.forms.concat([routedForm])
    }));
    this.props.history.push(`/tracks/${this.props.currentTrack.id}/${temp.id}`);
  }

  render() {
    const style = { marginTop: `${this.props.top}px` };
    return (
      <div id="info-column">
        { this.props.annotationPrompt && <div style={style} className="annotation-prompt-container"><button id="annotation-prompt-button" onClick={ this.createAnnotationForm }>Start the Prodigy Annotation</button></div> }
        { !this.props.annotationPrompt && this.state.forms }
        { !this.props.annotationPrompt && 
          <Route path="/tracks/:trackId/:annotationId" 
            render={props => <AnnotationShow {...props}
              annotations={this.props.annotations}
              top={this.props.top}
              currentUserId={this.props.currentUserId}
              deleteAnnotation={this.props.deleteAnnotation}
            />}
        /> } 
      </div>
    );
  }
};

export default InfoColumn;