import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
    this.editButton = this.editButton.bind(this);
  }

  componentDidMount() {
    this.props.clearTracks();
    this.props.clearArtists();
    this.props.fetchTrack(this.props.match.params.trackId).then(res => this.props.fetchTrackArtists(res.track.id));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
      this.props.clearTracks();
      this.props.clearArtists();
      this.props.fetchTrack(this.props.match.params.trackId).then(res => this.props.fetchTrackArtists(res.track.id));
    }
  }

  componentWillUnmount() {
    this.props.clearTracks();
    this.props.clearArtists();
  }

  editButton(e) {
    e.preventDefault();
  }

  render() {
    if (this.props.currentTrack === undefined || this.props.primaryArtist === undefined) { return <div>Loading...</div>};
    const spacedLyrics = this.props.currentTrack.lyrics.split(/\r?\n/).reduce((acc, val, i) => acc.concat(val, <br key={i}/>), []);
    return (
      <section className="track-show-page">
        <header className="track-show-header">
          <div className="track-show-image-container">
            <img id="track-show-image" src="https://f4.bcbits.com/img/a1710413326_10.jpg" />
          </div>
          <div className="track-show-header-info-container">
            <h1>{ this.props.currentTrack.name }</h1>
            <h2>{ this.props.primaryArtist.name }</h2>
            <div className="track-show-header-additional">
              {/*<h3>Featuring Big Freedia, cupcakKe, Brooke Candy</h3>*/}
              {/*<h3>Produced by Nömak, A. G. Cook</h3>*/}
              {/*<h3>Album Charli(Japanese Version)</h3>*/}
            </div>
          </div>
        </header>
        <main className="track-show-main">
          <div className="track-show-column-first">
            <section className="track-show-lyrics-container">
              <button onClick={this.editButton}>Edit Lyrics</button>
              <p>{spacedLyrics}</p>
            </section>
          </div>
          <div className="track-show-column-second"></div>
        </main>
        <footer className="track-show-footer"></footer>
      </section>
    )
  }
}

export default TrackShow;