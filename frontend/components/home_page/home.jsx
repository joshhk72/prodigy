import React from 'react';
import TrackPanel from './track_panel';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pages: {} };
  }

  componentDidMount() {
    this.props.clearTracks();
    this.props.fetchPageTracks(1)
      .then(({ tracks }) => this.setState( { pages: { '1': tracks } }));
  }

  componentWillUnmount() {
    this.props.clearTracks();
  }

  render() {
    const orderedRecentTracks = this.props.tracks.sort((a,b) => b.id - a.id);
    const trackLis = orderedRecentTracks.map((track, i) => <TrackPanel key={track.id} track={track} num={i + 1} />);
    return (
      <section className="home">
        <div className="home-track-list-container">
          <div><h2>Recent Songs</h2></div>
          <ul className="home-track-list">
            {trackLis}
          </ul>
        </div>
      </section>
    )
  }
}

export default HomePage;