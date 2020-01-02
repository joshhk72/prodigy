import React from 'react';

const NewsPanel = props => {
  const { article } = props;

  return (
    <li className="news-panel">
      <a href={article.url} target="_blank">
        <h3>{article.title}</h3>
        <div className="news-panel-bottom">
          <div>
            by {article.author} / <span>{article.source.name}</span>
          </div>
          <div className="news-panel-image">
            <div className="content">
              <img src={article.urlToImage}/>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default NewsPanel;