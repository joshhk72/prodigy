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

  checkState(e) {
    console.log(this.props.tracks);
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
      </section>
    )
  }
}

export default HomePage;