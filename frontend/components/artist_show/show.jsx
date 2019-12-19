import React from 'react';
import { FadeIn } from 'react-fade-in';
import ReactLoading from "react-loading";
import ArtistTrackLi from './track_li';
import ArtistAlbumLi from './album_li';
import defaultImage from 'assets/images/no_image.png';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.clearArtists();
    this.props.fetchArtist(this.props.match.params.artistId).then(
      () => this.setState({ done: true }),
      () => this.setState({ done: true }) 
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.artistId !== prevProps.match.params.artistId) {
      this.props.clearArtists();
      this.props.fetchArtist(this.props.match.params.artistId).then(
        () => this.setState({ done: true }),
        () => this.setState({ done: true })
      );
    };
  }

  handleImageError(e) {
    e.target.src = defaultImage;
  }

  openModal() {
    this.props.openModal('artistEdit');
  }

  render() {
    if (!this.state.done) {
      return <ReactLoading type={"bars"} color={"white"} />;
    } else if (this.props.currentArtist === undefined) {
      return <div className="no-tracks-shown"><h2>Error!</h2><p>The artist you are looking for does not exist!</p></div>
    };

    const { albums, tracks, name, description, image_url, banner_image_url } = this.props.currentArtist;

    let bannerImage;
    if (banner_image_url) {
      bannerImage = banner_image_url;
    } else if (image_url) {
      bannerImage = image_url;
    }

    const heroStyle = {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" + (bannerImage ? `,url(${bannerImage})` : "")
    };

    let descParagraphs
    if (description) descParagraphs = description.split(/\r?\n/).map((paragraph, i) => {
      return <p key={500+i}>{paragraph}</p>
    });

    const trackLis = tracks.map(track => <ArtistTrackLi track={track} key={track.id}/>);
    const albumLis = albums.map(album => <ArtistAlbumLi album={album} key={album.id}/>);

    return(
      <section className="artist-show-page">
        <header className="artist-show-header" id="artist-hero-image" style={heroStyle}>
          <div id="artist-show-header-center">
            <div>
              <div className="artist-show-image-container">
                <img id="artist-show-image" onError={this.handleImageError} src={`${image_url || defaultImage}`} />
              </div>
            </div>
          </div>
        </header>
        <main className="artist-show-main">
          <div className="artist-show-column-first">
            <div className="artist-show-main-info">
              <h1>{name}</h1>
              { this.props.loggedIn && <button onClick={this.openModal} className='artist-edit-button'>Edit Artist</button> }
            </div>
            <div className="artist-show-about">
              <h3>{`About "${name}"`}</h3>
              {descParagraphs}
            </div>
          </div>
          <div className="artist-show-column-second">
            <div className="artist-show-tracks">
              <h3>{name} Songs</h3>
              <ul className="artist-show-track-panel">
                {trackLis}
              </ul>
            </div>
            { albums && albums.length > 0 && 
              <div className="artist-show-albums">
                <h3>{name} Albums</h3>
                <ul className="artist-show-album-panel">
                  {albumLis}
                </ul>
              </div> 
            }
          </div>
        </main>
      </section>
    );
  }
}

export default ArtistShow;