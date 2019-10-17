import React from 'react';
import TrackPanel from './track_panel';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.clearTracks();
    this.props.fetchTracks();
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