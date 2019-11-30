import React from 'react';
import TrackFormErrorsList from './track_form_errors_list';
import SuggestedInput from './suggested_input';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: undefined, name: undefined, lyrics: undefined, features: undefined, producers: undefined, writers: undefined, date: undefined, album: undefined, track: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("dark-body");
    this.props.resetErrors();
  }

  componentWillUnmount() {
    document.body.classList.remove("dark-body");
    this.props.resetErrors();
    this.props.clearSearch();
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
              <SuggestedInput
                label={'BY *'}
                search={this.props.searchArtists}
                update={this.update("artist")}
                results={this.props.searchedArtists}
                klass={'suggested-artists'}
                />
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
              <SuggestedInput
                label={'FEATURING'}
                search={this.props.searchFeatures}
                update={this.update("features")}
                results={this.props.searchedFeatures}
                klass={'suggested-features'}
              />
              <SuggestedInput
                label={'PRODUCED BY'}
                search={this.props.searchProducers}
                update={this.update("producers")}
                results={this.props.searchedProducers}
                klass={'suggested-producers'}
              />
              <SuggestedInput
                label={'WRITTEN BY'}
                search={this.props.searchWriters}
                update={this.update("writers")}
                results={this.props.searchedWriters}
                klass={'suggested-writers'}
              />
              <label>RELEASE DATE
                <br />
                <input onChange={ this.update("date") } value={ this.state.date || "" } type="date"></input>
              </label>
              <br />
                <SuggestedInput
                  label={'ALBUM'}
                  search={this.props.searchAlbums}
                  update={this.update("album")}
                  results={this.props.searchedAlbums}
                  klass={'suggested-albums'}
                />
            </div>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default TrackForm