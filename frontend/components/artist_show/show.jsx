import React from 'react';
import { FadeIn } from 'react-fade-in';
import ReactLoading from "react-loading";
import ArtistTrackLi from './track_li';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
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
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  };

  render() {
    if (!this.state.done) {
      return <ReactLoading type={"bars"} color={"white"} />;
    } else if (this.props.currentArtist === undefined) {
      return <div className="no-tracks-shown"><h2>Error!</h2><p>The artist you are looking for does not exist!</p></div>
    };

    const { albums, tracks, name, description, image_url, banner_image_url } = this.props.currentArtist;
    console.dir(this.props.currentArtist);

    let heroStyle;
    
    if (banner_image_url) {
      heroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner_image_url})`
      };
    }

    const trackLis = tracks.map(track => <ArtistTrackLi track={track} key={track.id}/>);

    return(
      <section className="artist-show-page">
        <header className="artist-show-header" id="artist-hero-image" style={heroStyle}>

        </header>
        <main className="artist-show-main">
          <div className="artist-show-column-first">
            <div className="artist-show-image-container">
              <img id="artist-show-image" onError={this.handleImageError} src={`${image_url}`} />
            </div>
            <div className="artist-show-main-info">
              <h1>{name}</h1>
            </div>
            <div className="artist-show-about">
              <h3>{`About "${name}"`}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="artist-show-column-second">
            <div className="artist-show-songs">
              <h3>{name} Songs</h3>
              <ul className="artist-show-song-panel">
                {trackLis}
              </ul>
            </div>
            <div className="artist-show-albums">
              <h3>{name} Albums</h3>
              <ul className="artist-show-album-panel">
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default ArtistShow;