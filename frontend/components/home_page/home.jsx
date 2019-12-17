import React from 'react';
import TrackPanel from './track_panel';
import { ClipLoader } from 'react-spinners';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1, loadPage: false };
    this.fetchPageTracks = this.fetchNextPage.bind(this);
  }

  componentDidMount() {
    this.props.clearTracks();
    this.props.fetchPageTracks(1);
  }

  componentWillUnmount() {
    this.props.clearTracks();
  }

  fetchNextPage() {
    this.setState({ loadPage: true }, () => {
      this.props.fetchPageTracks(this.state.page + 1)
        .then(() => this.setState({ page: this.state.page + 1, loadPage: false }));
    })
  }

  render() {
    const trackLis = this.props.tracks.map((track, i) => <TrackPanel key={track.id} track={track} num={i + 1} />);
    return (
      <section className="home">
        <div className="home-track-list-container">
          <div><h2>Recent Songs</h2></div>
          <ul className="home-track-list">
            {trackLis}
          </ul>
        </div>
        <div className="track-load">
          {!this.props.maxPage && !this.state.loadPage && <button 
            className="track-load-button"
            onClick={ () => this.fetchNextPage() }
          >
            Load More
          </button>}
          <ClipLoader
            sizeUnit={"em"}
            size={1.4}
            color={'gray'}
            loading={this.state.loadPage}
          />
        </div>
      </section>
    )
  }
}

export default HomePage;