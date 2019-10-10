import React from 'react';
import { lyricsOne } from './lyrics_example';

class TrackShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="track-show-page">
        <header className="track-show-header">
          <div className="track-show-image-container">
            <img id="track-show-image" src="https://f4.bcbits.com/img/a1710413326_10.jpg" />
          </div>
          <div className="track-show-header-info-container">
            <h1>Shake It</h1>
            <h2>Charli XCX</h2>
            <div className="track-show-header-additional">
              <h3>Featuring Big Freedia, cupcakKe, Brooke Candy</h3>
              <h3>Produced by Nömak, A. G. Cook</h3>
              <h3>Album Charli(Japanese Version)</h3>
            </div>
          </div>
        </header>
        <main className="track-show-main">
          <div className="track-show-column-first">
            <section className="track-show-lyrics-container">
              <button>Edit Lyrics</button>
              <p></p>
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