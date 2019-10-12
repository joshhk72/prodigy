import React from 'react';

class TrackEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.currentTrack;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
      const container = document.getElementById("track-modal-container");
      const screen = document.getElementById("modal-screen");
      const form = document.getElementById("modal-form");
      container.classList.add("modal-hide");
      screen.classList.add("modal-hide");
      form.classList.add("modal-hide");
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const container = document.getElementById("track-modal-container");
    const screen = document.getElementById("modal-screen");
    const form = document.getElementById("modal-form");
    container.classList.add("modal-hide");
    screen.classList.add("modal-hide");
    form.classList.add("modal-hide");
  }

  handleModalClick() {
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

  render() {
    return (
      <div className="modal-container modal-hide" id="track-modal-container">
        <div onClick={this.handleModalClick} className="modal-screen modal-hide" id="modal-screen" />
        <form onSubmit={this.handleSubmit} className="track-modal-form modal-hide" id="modal-form">
          <div className="track-modal-tab">TITLE AND ARTISTS</div>
          <div className="track-modal-subform" id="subform-1">
            <label className="subform-1-input">TITLE
              <br />
              <input type="text" />
            </label >
            <label className="subform-1-input">ARTIST
              <br />
              <input type="text" />
            </label>
            <label className="subform-1-input">FEATURING
              <br />
              <input type="text" />
            </label>
            <label className="subform-1-input">WRITTEN BY
              <br />
              <input type="text" />
            </label>
            <label className="subform-1-input">PRODUCED BY
              <br />
              <input type="text" />
            </label>
          </div>
          <div className="track-modal-tab">AUDIO, VIDEO & IMAGES</div>
          <div className="track-modal-subform">
            <label className="subform-2-input">SONG ART URL
              <input type="text" />
            </label>
            <label className="subform-1-input">YOUTUBE URL
              <input type="text" />
            </label>
          </div>
          <div className="track-modal-tab">ALBUMS, DATE & TAGS</div>
          <div className="track-modal-subform">
            <label>ALBUM
              <input type="text" />
            </label>
            <label>DATE
              <input type="text" />
            </label>
          </div>
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default TrackEditForm;