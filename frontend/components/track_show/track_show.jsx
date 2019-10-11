import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editLyrics: false, lyrics: "" }
    this.editButton = this.editButton.bind(this);
    this.submitLyrics = this.submitLyrics.bind(this);
  }

  componentDidMount() {
    this.props.clearTracks();
    this.props.clearArtists();
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(res => {
        this.setState({ lyrics: res.track.lyrics });
        this.props.fetchTrackArtists(res.track.id);
        const image = document.getElementById('track-show-image');
        image.onerror = function () {
          this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
        };
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
      this.props.clearTracks();
      this.props.clearArtists();
      this.props.fetchTrack(this.props.match.params.trackId)
        .then(res => {
          this.setState({ editLyrics: false, lyrics: res.track.lyrics });
          this.props.fetchTrackArtists(res.track.id);
        });
    }
  }

  componentWillUnmount() {
    this.props.clearTracks();
    this.props.clearArtists();
  }

  editButton() {
    const editLyrics = !this.state.editLyrics;
    this.setState({ editLyrics });
  }

  submitLyrics() {
    const track = { id: this.props.currentTrack.id, lyrics: this.state.lyrics }

    this.props.updateTrack(track)
      .then(() => this.editButton());
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    if (this.props.currentTrack === undefined || this.props.primaryArtist === undefined) { return <div>Loading...</div>};
    
    const spacedLyrics = this.props.currentTrack.lyrics.split(/\r?\n/).reduce((acc, val, i) => acc.concat(val, <br key={i}/>), []);
    const editArea = (< textarea onChange={this.update("lyrics")} style={{height: spacedLyrics.length * 17.3}} id = "edit-textarea" rows = "10" value = { this.state.lyrics } />);

    return (
      <section className="track-show-page">
        <header className="track-show-header">
          <div className="track-show-image-container">
            <img id="track-show-image" src={this.props.currentTrack.image_url || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"  } />
          </div>
          <div className="track-show-header-info-container">
            <h1>{ this.props.currentTrack.name }</h1>
            <h2>{ this.props.primaryArtist.name }</h2>
            <div className="track-show-header-additional">
              {/*<h3>Featuring Big Freedia, cupcakKe, Brooke Candy</h3>*/}
              {/*<h3>Produced by Nömak, A. G. Cook</h3>*/}
              {/*<h3>Album Charli(Japanese Version)</h3>*/}
            </div>
          </div>
        </header>
        <main className="track-show-main">
          <div className="track-show-column-first">
            <section className="track-show-lyrics-container">
              {!this.state.editLyrics ? 
                <button onClick={this.editButton}>Edit Lyrics</button> :
                <div>
                  <button onClick={this.submitLyrics}>Save</button>
                  <button onClick={this.editButton}>Cancel</button>
                </div>
              }
              { !this.state.editLyrics ? 
                <p>{spacedLyrics}</p> : 
                editArea 
              }
            </section>
          </div>
          <div className="track-show-column-second"></div>
        </main>
        <footer className="track-show-footer"></footer>
      </section>
    )
  }
}

export default TrackShow;