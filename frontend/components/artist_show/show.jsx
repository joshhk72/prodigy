import React from 'react';
import { FadeIn } from 'react-fade-in';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.clearArtists();
    this.fetchArtist(this.props.)
  }

  handleImageError(e) {
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  };

  render() {

    const heroStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://thesource.com/wp-content/uploads/2019/09/Travis-Scott001.jpg)`
    };
    return(
      <section className="artist-show-page" onClick={this.handleSpanClick}>
        <header className="artist-show-header" id="artist-hero-image" style={heroStyle}>
        </header>
        <main className="artist-show-main">
          <div className="artist-show-column-first">
            <div className="artist-show-image-container">
              <img id="artist-show-image" onError={this.handleImageError} src="https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg" />
            </div>
            <div className="artist-show-main-info">
              <h1>Travis Scott</h1>
            </div>
            <div className="artist-show-about">
              <h3>About "Travis Scott"</h3>
              <p>Jacques Berman Webster II (born April 30, 1992), better known as Travis Scott (previously stylized as “Travi$ Scott”) is a rapper and producer from Missouri City, Texas, located within the Houston Metropolitan area. Scott began producing and releasing beats via Myspace at 16.</p>
            </div>
          </div>
          <div className="artist-show-column-second">
            <div className="artist-show-songs">
              <h3>Travis Scott Songs</h3>
              <ul className="artist-show-song-panel">
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
            <div className="artist-show-albums">
              <h3>Travis Scott Albums</h3>
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