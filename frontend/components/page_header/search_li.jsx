import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSearchLi = props => {
  const { image_url, name, artist, id } = props.track;
  return (
    <li className="header-search-li">
      <Link to={`/tracks/${id}`}>
        <img src={ image_url }/>
        <div>
          <h3>{name}</h3>
          <span>{artist}</span>
        </div>
      </Link>
    </li>
  )
};

export default HeaderSearchLi;