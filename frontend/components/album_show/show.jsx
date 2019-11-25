import React from 'react';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';

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

    console.log(this.props.currentAlbum);

    const { image, artist, title } = this.props.currentAlbum;

    return (
      <section className="album-show-page">
        <header id="album-show-hero">
          <div className="album-show-image-container">
            <img id="album-show-image" onError={this.handleImageError} src={image} />
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
        </header>
      </section>
    )
  }
};

export default AlbumShow;