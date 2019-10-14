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
      this.props.clearAlbums();
      this.props.fetchTrack(this.props.match.params.trackId)
        .then(res => {
          this.setState({ lyrics: res.track.lyrics });
          if (res.track.album_id) {
            this.props.fetchAlbum(res.track.album_id);
          };
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

  handleHighlight() {
    
    const annotationNodes = document.getElementsByClassName('annotated-lyrics');
    if (AnnotateUtil.annotationsNotSelected(annotationNodes)) {
      
      // const range = window.getSelection().getRangeAt(0);
      // const rangeNodes = range.cloneContents();
      // if (rangeNodes.firstChild && rangeNodes.firstChild.nodeName === "BR") {
      //   const start = range.endOffset;
      //   const startContainer = range.startContainer;
      // }

      const lyricsContainer = document.getElementById("lyrics-container");
      const indices = AnnotateUtil.getIndices(lyricsContainer);
      const { i1, i2, j1, j2 } = indices;
      const mappedNodeList = AnnotateUtil.mapNodeList(lyricsContainer.childNodes);
      const { startIdx, endIdx } = AnnotateUtil.getStartAndEndIndices(mappedNodeList, indices);
      console.log(`start: ${startIdx}, end: ${endIdx}`);
    };
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

    const { currentTrack, loggedIn } = this.props;

    const lyricsLines = currentTrack.lyrics.split(/\r?\n/).reduce((acc, val, i) => acc.concat(val, <br key={i} />), []).length - 1;
    // we have to order the annotations since they are ordered by id, not start_idx right now
    // we want annotations in REVERSE ORDER!

    let lyricsHTML
    if (currentTrack.annotations !== undefined) {
      const annotations = Object.values(currentTrack.annotations).sort((a, b) => b.start_idx - a.start_idx);
      const annotatedLyrics = AnnotateUtil.annotateLyrics(currentTrack.lyrics, annotations);
      lyricsHTML = AnnotateUtil.lineBreakLyrics(annotatedLyrics);
    } else {
      lyricsHTML = AnnotateUtil.lineBreakLyrics(currentTrack.lyrics);
    }
    
    const lyricsContainer = (<p onMouseUp={ this.handleHighlight } dangerouslySetInnerHTML={{ __html: lyricsHTML }} id='lyrics-container'></p>)

    const editArea = (< textarea onChange={this.update("lyrics")} style={{height: lyricsLines * 17}} id = "edit-textarea" rows = "10" value = { this.state.lyrics } />);
    const lyricsButtons = loggedIn ? 
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
            <img id="track-show-image" onError={handleImageError.bind(this)} src={ image_url } />
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
          <div className="track-show-column-first" >
            <section className="track-show-lyrics-container">
              { lyricsButtons }
              { !this.state.editLyrics ? 
                lyricsContainer : 
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