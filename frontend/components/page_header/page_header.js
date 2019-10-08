import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search_form';

// later this will render buttons, just like on Genius!
// buttons are for Forums, Feed, Me, Messages, Earn IQ, {user icon}

const PageHeader = (props) => {
  if (props.currentUser) {
    return (
      <div className="page-header">
        <SearchForm />
        <Link to='/'><span id="logo">Prodigy</span></Link>
        <div className="header-actions">
          <a href="#"><i class="fas fa-thumbtack"></i> Forums</a>
          <a href="#"><i class="fas fa-flag"></i> Feed</a>
          <a href="#"><i class="fas fa-bell"></i> Me</a>
          <a href="#"><i class="fas fa-envelope"></i> Messages</a>
          <a href="#"><i class="fas fa-brain"></i> Earn IQ</a>
          <a onClick={props.logout}>Logout</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-header">
        <SearchForm />
        <Link to='/'><span id="logo">Prodigy</span></Link>
        <div className="header-actions">
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      </div>
    );
  }
}

export default PageHeader;