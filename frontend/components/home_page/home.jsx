import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

  componentWillMount() {
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
    const trackLis = this.props.tracks.map((track, i) => {
      return (<li key={i}><Link to={`/tracks/${track.id}`}>{track.name}</Link></li>)
    })
    return (
      <section>
        <div>Hello! Click to check tracks below</div>
        <br />
        <ul>
          {trackLis}
        </ul>
      </section>
    )
  }
}

export default HomePage;