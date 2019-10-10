import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      track: { name: "", lyrics: "", date: undefined },
      artist: { name: "" },
      album: { title: "", artist: "" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("dark-body");
  }

  componentWillUnmount() {
    document.body.classList.remove("dark-body");
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  updateArtist(field) {
    return e => {
      this.setState({ artist:
        Object.assign({}, this.state.artist, { [field]: e.target.value })
      })
    }
  }

  updateAlbum(field) {
    return e => {
      this.setState({ album:
        Object.assign({}, this.state.artist, { [field]: e.target.value })
      })
    }
  }

  updateTrack(field) {
    return e => {
      this.setState({ track: 
        Object.assign({}, this.state.track, { [field]: e.target.value })
      })
    }
  }

  render() {
    return (
      <div className="track-form-container">
        <h1>Add Song</h1>
        <small>* required</small>
        <form onSubmit={this.handleSubmit} className="track-form">
          <div className="form-primary-column">
            <h3>Primary Info</h3>
            <div>
              <label>BY *
                <br />
                <input type="text" />
              </label>
              <label>TITLE *
                <br />
                <input type="text" onChange={this.updateTrack("name")} value={this.state.track.name} />
              </label>
            </div>
          </div>

          <div className="form-lyrics-column">
            <h3>Lyrics *</h3>
            <div className="form-lyrics-container">
              <label>
                <textarea onChange={this.updateTrack("lyrics")} value={this.state.track.lyrics} cols="40" rows="12" />
              </label>
            </div>
          </div>
          <div className="form-secondary-column">
            <h3>Additional Metadata</h3>
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
                <input onChange={this.updateTrack("date")} value={ this.state.track.date || "" } type="date"></input>
              </label>
              <br />
              <label>ALBUM
                <br />
                <input type="text" />
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