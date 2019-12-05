import React, { useEffect } from 'react';
import showdown from 'showdown';
import { replaceTweets, renderTweets } from '../../../util/tweet_util';
require("showdown-youtube");

const AnnotationBody = props => {
  const { body } = props;
  useEffect(() => {
    renderTweets();
  }, []);
  const tweetsReplaced = replaceTweets(body);
  const converter = new showdown.Converter({ extensions: ['youtube'] });
  const html = converter.makeHtml(tweetsReplaced);

  // don't need to sanitize html because it's only on the client side
  return (
    <div className="annotation-body annotation-show" dangerouslySetInnerHTML={{ __html: html }}>
    </div>
  )
};

export default AnnotationBody;