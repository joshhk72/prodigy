import React from 'react';
import TrackFormErrorsList from './track_form_errors_list';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: undefined, name: undefined, lyrics: undefined, featured: [], producers: [], writers: [], date: undefined, album: undefined, track: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("dark-body");
    this.props.resetErrors();
  }

  componentWillUnmount() {
    document.body.classList.remove("dark-body");
    this.props.resetErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitTrackForm(this.state).then(
      response => this.props.history.push(`/tracks/${response.track.id}`)
    );
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <div className="track-form-container">
        <div className="track-form-top">
          <h1>Add Song</h1>
          { this.props.errors.length > 0 && 
            <TrackFormErrorsList errors={ this.props.errors }/>
          }
        </div>
        <form onSubmit={this.handleSubmit} className="track-form">
          <div className="form-primary-column">
            <h3>Primary Info</h3>
            <div>
              <label>BY *
                <br />
                <input type="text" onChange={ this.update("artist")} value={ this.state.artist || "" } required />
              </label>
              <label>TITLE *
                <br />
                <input type="text" onChange={ this.update("name") } value={ this.state.name || "" } required />
              </label>
            </div>
          </div>

          <div className="form-lyrics-column">
            <h3>Lyrics *</h3>
            <div className="form-lyrics-container">
              <label>
                <textarea onChange={ this.update("lyrics") } value={ this.state.lyrics || "" } cols="40" rows="12" />
              </label>
            </div>
          </div>
          <div className="form-secondary-column">
            <div className="track-form-additional-div">
              <h3 id="track-form-additional">Additional Metadata</h3>
              <small>* required</small>
            </div> 
            <div>
              <label>FEATURING
                <br />
                <input type="text" />
              </label>
              <label>PRODUCED BY
                <br />
                <input type="text" />
              </label>
              <label>WRITTEN BY
                <br />
                <input type="text" />
              </label>
              <label>RELEASE DATE
                <br />
                <input onChange={ this.update("date") } value={ this.state.date || "" } type="date"></input>
              </label>
              <br />
              <label>ALBUM
                <br />
                <input type="text" onChange={ this.update("album") } value= { this.state.album || "" }/>
              </label>
            </div>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default TrackForm