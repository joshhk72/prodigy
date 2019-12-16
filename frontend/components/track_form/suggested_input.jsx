import React from 'react';

class SuggestedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: undefined, open: false };
    // term comes in through props
    // so does search function
    this.update = this.update.bind(this);
    this.fillForm = this.fillForm.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (!e.target.className.includes(this.props.klass)) {
      this.setState({ open: false });
    };
  }

  fillForm(value) {
    if (this.props.label === "ALBUM" || this.props.label === "BY *") {
      this.setState({ term: value, open: false });
    } else {
      const formArray = this.state.term.split(', ');
      formArray[formArray.length - 1] = value;
      this.setState({ term: formArray.join(', ') + ', ', open: false });
      this.namedInput.focus();
    }
    this.props.update({ target: { value: value }});
  }

  update(e) {
    if (this.props.label === "ALBUM" || this.props.label === "BY *") {
      this.setState({ term: e.target.value, open: true }, () => {
        this.props.search(this.state.term)
      });
    } else {
      const searchArray = e.target.value.split(', ');
      const searchTerm = searchArray[searchArray.length - 1];
      this.setState({ term: e.target.value, open: true }, () => {
        this.props.search(searchTerm);
      });
    }
    this.props.update(e);
  }

  render() {
    let resultLis;
    if (this.props.label === "ALBUM") {
      resultLis = this.props.results.map(album => <li className={this.props.klass} onClick={() => this.fillForm(album.title)} key={album.id}>{album.title}</li>)
    } else {
      resultLis = this.props.results.map(artist => <li className={this.props.klass} onClick={() => this.fillForm(artist.name)} key={artist.id}>{artist.name}</li>)
    }
    return (
      <div className={this.props.klass}>
        <div className={`track-form-suggested-input ${this.props.klass}`}>
          <label className={this.props.klass}>{this.props.label}
            <br className={this.props.klass} />
            <input type="text"
              ref={input => { this.namedInput = input; }} 
              className={this.props.klass}
              onChange={this.update} 
              value={this.state.term || ''} />
          </label>
          {(this.state.term && this.state.open) &&
            (<div className={`track-form-suggestion ${this.props.klass}`}>
            <ul className={this.props.klass}>
              {resultLis}
            </ul>
          </div>)}
        </div>
      </div>
    )
  }
};

export default SuggestedInput;