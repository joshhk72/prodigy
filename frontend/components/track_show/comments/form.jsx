import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      commenting: false, 
      body: "", 
      author_id: props.author.id, 
      track_id: props.trackId 
    };
    this.startComment = this.startComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  submitComment(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.submitComment(this.state)
      .then(() => this.setState({ commenting: false }));
  }

  startComment() {
    this.setState({ commenting: true });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const preform = (
      <div className="comment-form-container">
        <input 
          placeholder="Add a comment" 
          className="comment-pre" type="text" 
          onMouseDown={ this.startComment }/>
      </div>
    )

    const form = (
      <div className="comment-form-container">
        <form onSubmit={this.submitComment}>
          <textarea 
            placeholder="Add a comment" 
            className="comment-input"
            onChange={ this.update("body") } 
            value={ this.state.body }/>
          <button className="submit-comment">Submit</button>
        </form>
      </div>
    );

    const renderedForm = this.state.commenting ? form : preform;

    return (
      renderedForm
    )
  }
}

export default CommentForm;