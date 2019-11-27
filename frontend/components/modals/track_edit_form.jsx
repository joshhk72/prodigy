import React from 'react';
import { merge } from 'lodash'

class TrackEditForm extends React.Component {
  constructor(props) {
    super(props);
    const currentTrack = merge({}, props.currentTrack);
    if (currentTrack !== undefined) {
      currentTrack.artist = currentTrack.artist.name;
      currentTrack.features = currentTrack.features.map(artist => artist.name);
      currentTrack.producers = currentTrack.producers.map(artist => artist.name);
      currentTrack.writers = currentTrack.writers.map(artist => artist.name);
      currentTrack.album = currentTrack.album.title
    };
    
    this.state = currentTrack;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const submission = Object.assign({}, this.state);
    submission.id = this.props.currentTrack.id;
    submission.features = submission.features.join(', ');
    submission.producers = submission.producers.join(', ');
    submission.writers = submission.writers.join(', ');
    this.props.updateTrackForm(submission).then(() => {
      this.props.closeModal();
    })
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  updateArtists(field) {
    return e => {
      this.setState({ [field]: e.target.value.split(', ') })
    }
  }

  render() {
    const form = this.props.loggedIn ?
    (
      <div className="modal-container" id="track-modal-container">
        <form onSubmit={this.handleSubmit} className="track-modal-form modal-hide" id="modal-form">
          <div className="track-modal-tab">TITLE AND ARTISTS</div>
          <div className="track-modal-subform" id="subform-1">
            <label className="subform-1-input">TITLE
              <br />
              <input type="text" onChange={ this.update("name") } value={ this.state.name || "" }/>
            </label >
            <label className="subform-1-input">ARTIST
              <br />
              <input type="text" onChange={ this.update("artist") } value={ this.state.artist || "" }/>
            </label>
            <label className="subform-1-input">FEATURING
              <br />
              <input type="text" onChange={ this.updateArtists("features") } value={ this.state.features ? this.state.features.join(', ') : "" } />
            </label>
              <label className="subform-1-input">WRITTEN BY
              <br />
                <input type="text" onChange={ this.updateArtists("writers") } value={this.state.writers ? this.state.writers.join(', ') : "" } />
            </label>
              <label className="subform-1-input">PRODUCED BY
              <br />
                <input type="text" onChange={ this.updateArtists("producers") } value={ this.state.producers ? this.state.producers.join(', ') : "" }/>
            </label>
          </div>
          <div className="track-modal-tab">AUDIO, VIDEO & IMAGES</div>
          <div className="track-modal-subform">
            <label className="subform-2-input">SONG ART URL
              <input type="text" onChange={ this.update("image_url") } value={ this.state.image_url || "" }/>
            </label>
            <label className="subform-1-input">YOUTUBE URL
              <input type="text" onChange={ this.update("youtube_url") } value={ this.state.youtube_url || "" } />
            </label>
          </div>
          <div className="track-modal-tab">ALBUMS, DATE & TAGS</div>
          <div className="track-modal-subform">
            <label>ALBUM
              <input type="text" onChange={ this.update("album") } value={ this.state.album || "" } />
            </label>
            <label>DATE
              <input type="date" onChange={ this.update("date") } value={ this.state.date || "" } />
            </label>
          </div>
          <button>Save</button>
        </form>
      </div>
    ) : <div></div>

    return form;
  }
}

export default TrackEditForm;