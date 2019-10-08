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
        <p>Welcome {`${props.currentUser.username}`}!</p>
        <button onClick={props.logout}>Logout</button>
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