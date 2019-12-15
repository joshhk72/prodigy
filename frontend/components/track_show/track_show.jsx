import React from 'react';
import * as AnnotateUtil from '../../util/annotate_util';
import InfoColumnContainer from './second_column/info_column_container';
import CommentColumnContainer from './comments/column_container';
import FadeIn from 'react-fade-in';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
import TrackArtistLink from './artist_link';

function handleImageError() {
  this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
};

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      done: false, 
      top: 0, 
      annotationPrompt: false, 
      editLyrics: false, 
      lyrics: "", 
      startIdx: undefined, 
      endIdx: undefined,
    }
    this.editButton = this.editButton.bind(this);
    this.submitLyrics = this.submitLyrics.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
    this.handleSpanClick = this.handleSpanClick.bind(this);
    this.closeAnnotationPrompt = this.closeAnnotationPrompt.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.clearInfo()
    document.addEventListener("mousedown", this.closeAnnotationPrompt);
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(res => {
        this.setState({ done: true, lyrics: res.track.lyrics });
        if (res.track.album_id) {
          this.props.fetchAlbum(res.track.album_id);
        };
      }, err => this.setState({ done: true }));
    //document.addEventListener("click", this.handleSpanClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
      this.clearInfo()
      this.setState({ done: false });
      this.props.fetchTrack(this.props.match.params.trackId)
        .then(res => {
          this.setState({ done: true, lyrics: res.track.lyrics });
          if (res.track.album_id) {
            this.props.fetchAlbum(res.track.album_id);
          };
        }, err => this.setState({ done: true }));
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
    this.props.clearUpvotes();
    this.props.clearComments();
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
        return;
      } else {
        this.setState({ annotationPrompt: false });
      }
    } else {
      this.setState({ annotationPrompt: false });
    }
  }

  handleSpanClick(e) {
    if (e.target.className.match(/annotation-submit/)) { return }
    if (e.target.localName === "button" || e.target.localName === "a") { return };
    
    if (e.target.className === "annotated-lyrics") { 
      this.props.history.push(`/tracks/${this.props.currentTrack.id}/${e.target.id}`);
    } else if (e.target.className.match(/annotation-show$/)) {
      return;
    } else {
      let x = e.target;
      while (x = x.parentNode) {
        if (!x) {
          break;
        } else if (x.className && x.className.match(/annotation-show$/)) {
          return;
        }
      }
      this.props.history.push(`/tracks/${this.props.currentTrack.id}`);
    }
  }

  handleHighlight() {
    if (this.state.editLyrics) return; // don't need to handle highlights when editing lyrics
    const selection = window.getSelection();
    if (!selection.extentNode || !selection.baseNode) return; // end and start nodes must exist

    const annotationNodes = document.getElementsByClassName('annotated-lyrics');
    if (AnnotateUtil.annotationsNotSelected(annotationNodes) && this.props.loggedIn) {
      const lyricsContainer = document.getElementById("lyrics-container");
      const { i1, i2, j1, j2 } = AnnotateUtil.getIndices(lyricsContainer); 
      // I could've deconstructed for these methods, but I wanted them to be easy to remember for the future!
      const mappedNodeList = AnnotateUtil.mapNodeList(lyricsContainer.childNodes);
      const { startIdx, endIdx } = AnnotateUtil.getStartAndEndIndices(mappedNodeList, { i1, i2, j1, j2 });
      const top = selection.getRangeAt(0).getBoundingClientRect().top + window.scrollY - 424;
      this.setState({ startIdx, endIdx, top });
      this.showAnnotationPrompt(startIdx, endIdx);
    };
  }

  handleModal() {
    this.props.openModal('trackEdit');
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
    if (!this.state.done) { 
      return <ReactLoading type={"bars"} color={"white"} />;
    } else if (this.props.currentTrack === undefined || this.props.currentTrack.lyrics === undefined) { 
      return <div className="no-tracks-shown"><h2>Error!</h2><p>The song you are looking for does not exist!</p></div>
    };

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

    const editArea = (< textarea onChange={this.update("lyrics")} style={{minHeight: "150px", height: lyricsLines * 17}} id = "edit-textarea" rows = "10" value = { this.state.lyrics } />);
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
    
    const { features, producers, writers, album, name, artist, image_url } = this.props.currentTrack;
    const featureLinks = features.map((feature, i) => (
      <span key={ feature.id }>
        { i === 0 && ' ' }
        { (i > 0 && features.length > 2) && ', ' }
        { (i > 0 && features.length === 2) && ' & '}
        <TrackArtistLink artist={ feature } />
      </span>
    ));

    const producerLinks = producers.map((producer, i) => (
      <span key={ producer.id }>
        { i === 0 && ' ' }
        { (i > 0 && producers.length > 2) && ', ' }
        { (i > 0 && producers.length === 2) && ' & ' }
        <TrackArtistLink artist={ producer } key={ producer.id } />
      </span>
    ));

    const writerLinks = writers.map((writer, i) => (
      <span key={writer.id}>
        {i === 0 && ' '}
        {(i > 0 && writers.length > 2) && ', '}
        {(i > 0 && writers.length === 2) && ' & '}
        <TrackArtistLink artist={writer} key={writer.id} />
      </span>
    ));

    const heroStyle = {
      backgroundImage: image_url ? `url(${image_url})` : ""
    };

    return (
      <section className="track-show-page" onClick={this.handleSpanClick}>
        <FadeIn>
          <header className="track-show-header" id="track-show-hero-image" style={heroStyle}>
            <div className="track-show-header-center">
              <div className="track-show-image-container">
                <div className="content">
                  <img onError={handleImageError.bind(this)} src={ image_url } />
                </div>
              </div>
              <div className="track-show-header-info-container">
                <h1>{ name }</h1>
                <h2><TrackArtistLink artist={artist}/></h2>
                <div className="track-show-header-additional">
                  { features.length > 0 && 
                    <h3>Featuring
                      { featureLinks }
                    </h3> }
                  { producers.length > 0 && 
                    <h3>Produced by
                      <span>
                        { producerLinks }
                      </span>
                    </h3> }
                  { writers.length > 0 && 
                    <h3>Written by
                      <span>
                        { writerLinks }
                      </span>
                    </h3> }
                  { album && <h3>Album <span><Link to={`/albums/${album.id}`}>{album.title}</Link></span></h3> }
                </div>
              </div>
            </div>
          </header>
        </FadeIn>
        <main className="track-show-main">
          <div className="track-show-column-first" onMouseUp={this.handleHighlight}>
            <section id="lyrics-rect" className="track-show-lyrics-container">
              { lyricsButtons }
              { !this.state.editLyrics ? 
                lyricsContainer : 
                editArea 
              }
            </section>
            <CommentColumnContainer currentTrack={this.props.currentTrack} />
          </div>
          <div className="track-show-column-second" id="second-col">
            <InfoColumnContainer
              closeAnnotationPrompt={this.closeAnnotationPrompt}
              annotationPrompt={this.state.annotationPrompt}
              startIdx={this.state.startIdx}
              endIdx={this.state.endIdx}
              currentTrack={this.props.currentTrack}
              top={this.state.top} /> 
          </div>
        </main>
        <footer className="track-show-footer">
        </footer>
      </section>
    )
  }
}

export default TrackShow;