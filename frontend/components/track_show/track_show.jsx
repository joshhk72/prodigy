import React from 'react';

function handleImageError() {
  this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
};

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editLyrics: false, lyrics: "" }
    this.editButton = this.editButton.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.submitLyrics = this.submitLyrics.bind(this);
  }

  componentDidMount() {
    this.props.clearTracks();
    this.props.clearArtists();
    this.props.clearAlbums();
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(res => {
        this.setState({ lyrics: res.track.lyrics });
        if (res.track.album_id) {
          this.props.fetchAlbum(res.track.album_id);
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
        });
    }
  }

  componentWillUnmount() {
    this.props.clearTracks();
    this.props.clearArtists();
    this.props.clearAlbums();
  }

  editButton() {
    const editLyrics = !this.state.editLyrics;
    this.setState({ editLyrics });
  }

  handleModal() {
    const modal = document.getElementsByClassName("modal-hide");

    Array.from(modal).forEach(ele => {
      ele.classList.remove("modal-hide");
    })
  }

  handleImageError() {
    this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  };

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
    if (this.props.currentTrack === undefined || this.props.currentTrack.lyrics === undefined) { return <div>Loading...</div>};
    
    const spacedLyrics = this.props.currentTrack.lyrics.split(/\r?\n/).reduce((acc, val, i) => acc.concat(val, <br key={i}/>), []);
    const editArea = (< textarea onChange={this.update("lyrics")} style={{height: spacedLyrics.length * 17.3}} id = "edit-textarea" rows = "10" value = { this.state.lyrics } />);

    return (
      <section className="track-show-page">
        <header className="track-show-header">
          <div className="track-show-image-container">
            <img id="track-show-image" onError={this.handleImageError} src={this.props.currentTrack.image_url || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"  } />
          </div>
          <div className="track-show-header-info-container">
            <h1>{ this.props.currentTrack.name }</h1>
            <h2>{ this.props.currentTrack.artist }</h2>
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
                <div>
                  <button onClick={this.editButton}>Edit Lyrics</button>
                  <button onClick={this.handleModal}>Edit Song Facts</button>
                </div> :
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