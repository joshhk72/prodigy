import React from 'react';

class TrackEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
      this.hideModal();
    }
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(res => {
        this.setState(res.track)
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    const submission = Object.assign({}, this.state);
    submission.features = submission.features.join(', ')
    submission.producers = submission.producers.join(', ')
    submission.writers = submission.writers.join(', ')
    console.log(submission)
    this.props.updateTrackForm(submission).then(() => {
      this.hideModal();
    })
  }

  hideModal() {
    const container = document.getElementById("track-modal-container");
    const screen = document.getElementById("modal-screen");
    const form = document.getElementById("modal-form");
    container.classList.add("modal-hide");
    screen.classList.add("modal-hide");
    form.classList.add("modal-hide");
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
      <div className="modal-container modal-hide" id="track-modal-container">
        <div onClick={this.hideModal} className="modal-screen modal-hide" id="modal-screen" />
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
            <label className="subform-1-input">FEATURING (SEPARATE WITH COMMA AND SPACE)
              <br />
              <input type="text" onChange={ this.updateArtists("features") } value={ this.state.features ? this.state.features.join(', ') : "" } />
            </label>
              <label className="subform-1-input">WRITTEN BY (SEPARATE WITH COMMA AND SPACE)
              <br />
                <input type="text" onChange={ this.updateArtists("writers") } value={this.state.writers ? this.state.writers.join(', ') : "" } />
            </label>
              <label className="subform-1-input">PRODUCED BY (SEPARATE WITH COMMA AND SPACE)
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

    return (this.state.id !== undefined) ? form : <div />
  }
}

export default TrackEditForm;