import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search_form';

// later this will render buttons, just like on Genius!
// buttons are for Forums, Feed, Me, Messages, Earn IQ, {user icon}

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  handleOutsideClick (e) {
    if (!e.target.matches('.dropdown')) {
      const list = document.getElementById("dropdown-list");
      if (list !== null) {
        list.classList.remove("show");
      }
    };
    window.removeEventListener("click", this.handleOutsideClick);
  }

  handleDropDown (e) {
    e.preventDefault();
    const list = document.getElementById("dropdown-list");
    list.classList.toggle("show");
    window.addEventListener('click', this.handleOutsideClick);
  }

  logout() {
    this.props.logout().then(() => this.props.history.goBack());
  }

  render() {
    return (
      <div className="page-header">
        <SearchForm searchTracks={this.props.searchTracks} searchedTracks={this.props.searchedTracks} />
        <Link to='/'><span id="logo">Prodigy</span></Link>
        <div className="header-actions">
          { this.props.currentUser && <>
            <Link to="/tracks/new"><i className="fas fa-thumbtack"></i> Add Track</Link>
            <div className="dropdown-container">
              <a className="dropdown-btn dropdown" onClick={this.handleDropDown}>
                <img src={this.props.currentUser.image_url} className="dropdown"></img>
                <span className="dropdown"> Profile</span>
                </a>
              <div id="dropdown-list" className="dropdown-content">
                <h3>Account</h3>
                <Link to={`/users/${this.props.currentUser.id}`}>View Profile</Link>
                <a href="#" onClick={this.logout}>Sign Out</a>
              </div>
            </div>
          </> }
          { !this.props.currentUser &&
            <>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/login'>Log In</Link>
            </>
          }
        </div>
      </div>
    );
  }
}
export default PageHeader;