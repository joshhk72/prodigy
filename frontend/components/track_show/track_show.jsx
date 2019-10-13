import React from 'react';
import * as AnnotateUtil from '../../util/annotate_util';

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
    this.handleHighlight = this.handleHighlight.bind(this);
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

  handleHighlight(e) {
    const highStart = window.getSelection().baseNode
    const highEnd = window.getSelection().extentNode
    const lyricsContainer = document.getElementById("lyrics-container");
    if (AnnotateUtil.onlyLyricsSelected()) {
      const i = Array.prototype.indexOf.call(lyricsContainer.childNodes, highStart);
      const j = Array.prototype.indexOf.call(lyricsContainer.childNodes, highEnd);
      console.log("Only lyrics are selected");
      // console.log(highStart);
      // console.log(i);
      // console.log(highEnd);
      // console.log(j);
    };

    // console.log(`String: ${selection.toString()}`);
    // console.log(`Type: ${selection.type}`);
    // console.log(`Start Offset: ${selection.getRangeAt(0).startOffset}`)
    // console.log(`Start Offset: ${selection.getRangeAt(0).endOffset}`)
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

  renderAnnotations() {
    
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
    if (this.props.currentTrack === undefined || this.props.currentTrack.lyrics === undefined) { return <div>Loading...</div>};
    
    const spacedLyrics = AnnotateUtil.lineBreakLyrics(this.props.currentTrack.lyrics);
    const editArea = (< textarea onChange={this.update("lyrics")} style={{height: spacedLyrics.length * 17.3}} id = "edit-textarea" rows = "10" value = { this.state.lyrics } />);
    const lyricsButtons = this.props.loggedIn ? 
      (!this.state.editLyrics ?
        <div>
          <button onClick={this.editButton}>Edit Lyrics</button>
          <button onClick={this.handleModal}>Edit Song Facts</button>
          <button onClick={this.handleHighlight}>Test Button</button>
        </div> :
        <div>
          <button onClick={this.submitLyrics}>Save</button>
          <button onClick={this.editButton}>Cancel</button>
        </div>
      ) : <div />
    
    const { features, producers, writers, album, name, artist, image_url } = this.props.currentTrack

    return (
      <section className="track-show-page">
        <header className="track-show-header">
          <div className="track-show-image-container">
            <img id="track-show-image" onError={this.handleImageError} src={ image_url || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"  } />
          </div>
          <div className="track-show-header-info-container">
            <h1>{ name }</h1>
            <h2>{ artist }</h2>
            <div className="track-show-header-additional">
              { features && <h3>Featuring <span>{features.length > 2 ? features.join(", ") : features.join(" & ") }</span></h3> }
              { producers && <h3>Produced by <span>{producers.length > 2 ? producers.join(", ") : producers.join(" & ")}</span></h3> }
              { writers && <h3>Written by <span>{writers.length > 2 ? writers.join(", ") : writers.join(" & ")}</span></h3> }
              { album && <h3>Album <span>{album}</span></h3> }
            </div>
          </div>
        </header>
        <main className="track-show-main">
          <div className="track-show-column-first">
            <section className="track-show-lyrics-container">
              { lyricsButtons }
              { !this.state.editLyrics ? 
                <p id="lyrics-container">{spacedLyrics}</p> : 
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