import React from 'react';
import * as searchAPIUtil from '../../util/search_api_util';
import HeaderSearchLi from './search_li';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      results: [],
      focus: false
    };
    this.clicked = this.clicked.bind(this);
    this.unclicked = this.unclicked.bind(this);
  }

  clicked() {
    this.setState({ focus: true });
    window.addEventListener("click", e => this.unclicked(e));
  }

  unclicked(e) {
    console.dir(e.target);
    if (!e.target.classList.toString().includes("header-search") && !e.target.classList.toString().includes("header-results")) {
      this.setState({ focus: false });
      window.removeEventListener("click", this.unclicked);
    };
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
      searchAPIUtil.fetchTrackResults(this.state.term)
        .then(res => this.setState({ results: res.tracks }));
    };
  }

  render() {
    const searchLis = this.state.results.map(result => (
      <HeaderSearchLi key={result.id} track={result}/>
    ));

    return (
      <div className="header-search-form-container">
        <form className="header-search-form">
          <input className="header-search-input" type="text" onFocus={this.clicked} onBlur={this.unclicked} onChange={ this.update("term") } value={ this.state.term }placeholder="Search songs & more"/>
          <button><i className="fas fa-search"></i></button>
        </form>
        {this.state.focus && (
          <div className="header-results-container">
            <h3>SEARCH RESULTS</h3>
            <ul className="header-results-list">
              {this.state.results.length > 0 ? searchLis : <div className="header-no-results header-search"><span>No Results</span></div>}
            </ul>
          </div>
        )}
      </div>
    );
  }
};

export default SearchForm;