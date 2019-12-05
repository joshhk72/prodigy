import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import showdown from 'showdown';
import { replaceTweets, renderTweets } from '../../../util/tweet_util';
require("showdown-youtube");

const AnswerBody = props => {
  const { answer } = props;
  useEffect(() => {
    renderTweets();
  }, []);
  const tweetsReplaced = replaceTweets(answer.body);
  const converter = new showdown.Converter({ extensions: ['youtube'] });
  const html = converter.makeHtml(tweetsReplaced);
  // don't need to sanitize html because it's only on the client side
  return (
    <div className="answer-body" dangerouslySetInnerHTML={{__html: html}}>
    </div>
  )
};

export default AnswerBody;

// so far
// *text* for bold
// **text** for italics
// > paragraph here for blockquotes
// [text](link) for links, images, videos
// <small>text</small> for small text
