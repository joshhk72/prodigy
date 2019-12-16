import React from 'react';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
import TrackPanel from './track_panel';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
    this.openModal = this.openModal.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  componentDidMount() {
    this.props.clearAlbums();
    this.props.fetchAlbum(this.props.match.params.albumId).then(
      () => this.setState({ done: true }),
      () => this.setState({ done: true })
    );
  }

  handleImageError(e) {
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  }

  openModal() {
    this.props.openModal('albumEdit');
  }

  render() {
    if (!this.state.done) {
      return <ReactLoading type={"bars"} color={"white"} />;
    } else if (this.props.currentAlbum === undefined) {
      return <div className="no-tracks-shown"><h2>Error!</h2><p>The album you are looking for does not exist!</p></div>
    };

    const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    const { image_url, banner_image_url, description, artist, title, tracks } = this.props.currentAlbum;

    let bannerImage;
    if (banner_image_url) {
      bannerImage = banner_image_url;
    } else if (image_url) {
      bannerImage = image_url;
    }

    const heroStyle = {
      backgroundImage: bannerImage ? `url(${bannerImage})` : ""
    };

    const trackLis = tracks.map(track => {
      return <TrackPanel key={track.id} track={track} />;
    });

    let descParagraphs
    if (description) descParagraphs = description.split(/\r?\n/).map((paragraph,i) => {
      return <p key={500+i}>{paragraph}</p>
    });

    return (
      <section className="album-show-page">
        <header id="album-show-hero" style={heroStyle}>
          <div id="album-show-hero-center">
            <div className="album-show-image-container">
              <div className="content">
                <img id="album-show-image"
                  onError={this.handleImageError}
                  src={image_url || defaultImage}
                />
              </div>
            </div>
            <div className="album-show-header-info-container">
              <span>Album</span>
              <h1>{title}</h1>
              <h2>
                <Link to={`/artists/${artist.id}`}>
                  {artist.name}
                </Link>
              </h2>
            </div>
          </div>
        </header>
        <main>
          <div className="album-show-main-col-1">
            { this.props.loggedIn && 
              <button onClick={() => this.props.openModal("albumEdit")}>Edit Album</button> 
            }
            <h2>{title} Tracklist</h2>
            <ul>
              {trackLis}
            </ul>
          </div>
          <div className="album-show-main-col-2">
            { description && <div className="album-show-description">
              <h3>About {title}</h3>
              {descParagraphs}
          </div> }
          </div>
        </main>
      </section>
    )
  }
};

export default AlbumShow;