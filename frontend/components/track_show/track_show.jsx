import React from 'react';
import * as AnnotateUtil from '../../util/annotate_util';
import InfoColumnContainer from './second_column/info_column_container';

function handleImageError() {
  this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
};

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { top: 0, annotationPrompt: false, editLyrics: false, lyrics: "", startIdx: undefined, endIdx: undefined }
    this.editButton = this.editButton.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.submitLyrics = this.submitLyrics.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
    this.handleSpanClick = this.handleSpanClick.bind(this);
    this.closeAnnotationPrompt = this.closeAnnotationPrompt.bind(this);
  }

  componentDidMount() {
    this.clearInfo()
    document.addEventListener("mousedown", this.closeAnnotationPrompt);
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(res => {
        this.setState({ lyrics: res.track.lyrics });
        if (res.track.album_id) {
          this.props.fetchAlbum(res.track.album_id);
        };
      });
    //document.addEventListener("click", this.handleSpanClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
      this.clearInfo()
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
    this.clearInfo()
    document.removeEventListener("mousedown", this.closeAnnotationPrompt);
    //document.removeEventListener("click", this.handleSpanClick);
  }

  clearInfo() {
    this.props.clearTracks();
    this.props.clearArtists();
    this.props.clearAlbums();
    this.props.clearAnnotations();
  }

  editButton() {
    this.setState({ annotationPrompt: false });
    const editLyrics = !this.state.editLyrics;
    this.setState({ editLyrics });
  }

  showAnnotationPrompt(startIdx, endIdx) {
    if (startIdx === endIdx) { 
      this.setState({ annotationPrompt: false }) 
    } else {
      this.setState( { annotationPrompt: true } )
    }
  }

  closeAnnotationPrompt(e) {
    if (e) {
      if (e.target.id === "annotation-prompt-button") {
        return
      } else {
        this.setState({ annotationPrompt: false });
      }
    } else {
      this.setState({ annotationPrompt: false });
    }
  }

  handleSpanClick(e) {
    if (e.target.className.match(/annotation-submit/)) { return }
    if (e.target.localName === "button") { return };
    
    if (e.target.className === "annotated-lyrics") { 
      this.props.history.push(`/tracks/${this.props.currentTrack.id}/${e.target.id}`);
    } else {
      this.props.history.push(`/tracks/${this.props.currentTrack.id}`);
    }
  }

  handleHighlight() {
    const selection = window.getSelection();
    if (!selection.extentNode || !selection.baseNode) { return };
    //if (selection.extentNode.nodeName !== "#text" || selection.baseNode.nodeName !== "#text") { return };
    const annotationNodes = document.getElementsByClassName('annotated-lyrics');
    if (AnnotateUtil.annotationsNotSelected(annotationNodes) && this.props.loggedIn) {
      const lyricsContainer = document.getElementById("lyrics-container");
      const { i1, i2, j1, j2 } = AnnotateUtil.getIndices(lyricsContainer);
      const mappedNodeList = AnnotateUtil.mapNodeList(lyricsContainer.childNodes);
      const { startIdx, endIdx } = AnnotateUtil.getStartAndEndIndices(mappedNodeList, { i1, i2, j1, j2 });
      const top = selection.getRangeAt(0).getBoundingClientRect().top + window.scrollY - 330;
      this.setState({ startIdx, endIdx, top });
      this.showAnnotationPrompt(startIdx, endIdx);
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
    if (this.props.annotations !== undefined) {
      const annotations = Object.values(this.props.annotations).sort((a, b) => b.start_idx - a.start_idx);
      const annotatedLyrics = AnnotateUtil.annotateLyrics(currentTrack.lyrics, annotations);
      lyricsHTML = AnnotateUtil.lineBreakLyrics(annotatedLyrics);
    } else {
      lyricsHTML = AnnotateUtil.lineBreakLyrics(currentTrack.lyrics);
    }
    
    const lyricsContainer = (<p dangerouslySetInnerHTML={{ __html: lyricsHTML }} id='lyrics-container'></p>)

    const editArea = (< textarea onChange={this.update("lyrics")} style={{height: lyricsLines * 17}} id = "edit-textarea" rows = "10" value = { this.state.lyrics } />);
    const lyricsButtons = loggedIn ? 
      (!this.state.editLyrics ?
        <div>
          <button onClick={this.editButton}>Edit Lyrics</button>
          <button onClick={this.handleModal}>Edit Song Facts</button>
        </div> :
        <div>
          <button id="lyrics-edit-save-button" onClick={this.submitLyrics}>Save</button>
          <button onClick={this.editButton}>Cancel</button>
        </div>
      ) : <div />
    
    const { features, producers, writers, album, name, artist, image_url } = this.props.currentTrack
    const heroStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image_url})`
    };

    return (
      <section className="track-show-page" onClick={this.handleSpanClick}>
        <header className="track-show-header" id="hero-image" style={heroStyle}>
          <div className="track-show-image-container">
            <img id="track-show-image" onError={handleImageError.bind(this)} src={ image_url } />
          </div>
          <div className="track-show-header-info-container">
            <h1>{ name }</h1>
            <h2>{ artist }</h2>
            <div className="track-show-header-additional">
              { features.length > 0 && <h3>Featuring <span>{features.length > 2 ? features.join(", ") : features.join(" & ") }</span></h3> }
              { producers.length > 0 && <h3>Produced by <span>{producers.length > 2 ? producers.join(", ") : producers.join(" & ")}</span></h3> }
              { writers.length > 0 && <h3>Written by <span>{writers.length > 2 ? writers.join(", ") : writers.join(" & ")}</span></h3> }
              { album && <h3>Album <span>{album}</span></h3> }
            </div>
          </div>
        </header>
        <main className="track-show-main">
          <div className="track-show-column-first" onMouseUp={this.handleHighlight}>
            <section id="lyrics-rect" className="track-show-lyrics-container">
              { lyricsButtons }
              { !this.state.editLyrics ? 
                lyricsContainer : 
                editArea 
              }
            </section>
          </div>
          <div className="track-show-column-second" id="second-col">
            <InfoColumnContainer
              closeAnnotationPrompt={this.closeAnnotationPrompt}
              startIdx={this.state.startIdx}
              endIdx={this.state.endIdx}
              currentTrack={this.props.currentTrack}
              top={this.state.top}
              annotationPrompt={this.state.annotationPrompt}/> 
          </div>
        </main>
        <footer className="track-show-footer"></footer>
      </section>
    )
  }
}

export default TrackShow;