import React from 'react';

class SuggestedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: undefined };
    // term comes in through props
    // so does search function
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ term: e.target.value }, () => {
      this.props.search(this.state.term)
    });
    this.props.update(e)
  }

  render() {
    let resultLis;
    if (this.props.label === "ALBUM") {
      resultLis = this.props.results.map(album => <li key={album.id}>{album.title}</li>)
    } else {
      resultLis = this.props.results.map(artist => <li key={artist.id}>{artist.name}</li>)
    }
    return (
      <div>
        <div className="track-form-suggested-input">
          <label>{this.props.label}
            <br />
            <input type="text"
              onChange={this.update} 
              value={this.state.term || ''} />
          </label>
          {this.state.term && 
          (<div className="track-form-suggestion">
            <ul>
              {resultLis}
            </ul>
          </div>)}
        </div>
      </div>
    )
  }
};

export default SuggestedInput;