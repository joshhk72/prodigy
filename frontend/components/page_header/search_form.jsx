import React from 'react';

const SearchForm = props => {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search songs & more"/>
      <button><i className="fas fa-search"></i></button>
    </form>
  );
};

export default SearchForm;