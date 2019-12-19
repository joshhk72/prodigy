import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from 'assets/images/no_image.png'

const HeaderSearchLi = props => {
  const { image_url, name, artist, id } = props.track;
  return (
    <li className="header-search-li">
      <Link onClick={props.clear} to={`/tracks/${id}`}>
        <img 
          src={ image_url || defaultImage }
          onError={e => e.target.src = defaultImage}/>
        <div>
          <h3>{name}</h3>
          <span>{artist}</span>
        </div>
      </Link>
    </li>
  )
};

export default HeaderSearchLi;