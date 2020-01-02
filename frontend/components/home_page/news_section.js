import React, { useEffect, useState } from 'react';
import NewsPanel from './news_panel';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d0443f03891e4da2aa94cc9a25c0879a');

const NewsSection = props => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    newsapi.v2.topHeadlines({
      category: 'entertainment',
      language: 'en',
      country: 'us',
      pageSize: 4
    }).then(response => {
      setArticles(response.articles);
    });
  }, [])

  const newsPanels = articles.map(article => 
    <NewsPanel article={article} key={article.publishedAt}/>
  );

  return (
    <ul className="news-section">
      {newsPanels}
    </ul>
  )
}

export default NewsSection;