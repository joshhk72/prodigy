import React from 'react';
import AnnotationShowContainer from './annotation_show_container';
import AnnotationForm from './annotation_form';
import AnnotationEditForm from './annotation_edit_form';
import { Route, Link } from 'react-router-dom';
import NonAnnotationColumn from './non_annotation_column';

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
        submit={this.props.createAnnotation}
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
    const { annotations, annotationPrompt, 
      currentTrack, currentUserId, 
      deleteAnnotation, top, match: { isExact } } = this.props;
    const style = { marginTop: `${this.props.top}px` };
    const hideNonAnnotation = annotationPrompt || !isExact;
    return (
      <div id="info-column">
        { currentUserId && annotationPrompt &&
          <div style={style} className="annotation-prompt-container">
            <button id="annotation-prompt-button"
              onClick={this.createAnnotationForm}>Start the Prodigy Annotation
          </button>
          </div>}
        {!currentUserId && annotationPrompt &&
          <div style={style} className="annotation-prompt-container">
            <Link id="annotation-prompt-button"
              to="/login">You must log in to annotate lyrics!
          </Link>
          </div>}
        { !annotationPrompt && this.state.forms.length > 0 && this.state.forms }
        { !annotationPrompt && 
          <Route exact path="/tracks/:trackId/:annotationId" 
            render={props => <AnnotationShowContainer {...props}
              annotations={annotations}
              top={top}
              currentUserId={currentUserId}
              deleteAnnotation={deleteAnnotation}
            />}
        /> }
        {!annotationPrompt &&
          <Route exact path="/tracks/:trackId/:annotationId/edit"
            render={props => <AnnotationEditForm {...props}
              top={top}
              currentUserId={currentUserId}
            />}
          />}
        <NonAnnotationColumn 
          currentTrack={currentTrack}
          hide={hideNonAnnotation}
        />
      </div>
    );
  }
};

export default InfoColumn;