import React from 'react';
import autosize from 'autosize';
import { updateAnnotation } from '../../../actions/annotation_actions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentAnnotation: state.entities.annotations[ownProps.match.params.annotationId]
});

const mapDispatchToProps = dispatch => ({
  submit: annotation => dispatch(updateAnnotation(annotation))
});

class AnnotationEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentAnnotation;
    this.top = this.props.top;
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.textarea = React.createRef();
  }

  componentDidMount() {
    const span = document.getElementById(this.state.id);
    if (span) { span.classList.add("active-annotation") };
    autosize(this.textarea.current);
  }

  componentWillUnmount() {
    const span = document.getElementById(this.state.id);
    if (span) { span.classList.remove("active-annotation") };
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/tracks/${this.state.track_id}/${this.state.id}`);
  }

  handleSave(e) {
    e.preventDefault();
    this.props.submit(this.state)
      .then(() => {
        this.props.history.push(`/tracks/${this.state.track_id}/${this.state.id}`);
      });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  render() {
    const { currentUser, currentAnnotation } = this.props;
    if (!currentUser || currentUser.id !== currentAnnotation.author_id) {
      return <Redirect to={`/tracks/${currentAnnotation.track_id}/${currentAnnotation.id}`}/>
    }

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
      <div style={style} className="annotation-form-container annotation-submit annotation-show">
        <form className="annotation-form annotation-submit" >
          <textarea ref={this.textarea} className="annotation-submit" placeholder={placeholdText} onChange={this.update("body")} value={this.state.body} />
          <button className="save-annotation" onClick={this.handleSave}>Save</button>
          <button className="cancel-annotation" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationEditForm));