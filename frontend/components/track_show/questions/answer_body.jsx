import React from 'react';
import showdown from 'showdown';
require("showdown-youtube");

const AnswerBody = props => {
  const { answer } = props;
  const converter = new showdown.Converter({ extensions: ['youtube'] });
  const html = converter.makeHtml(answer.body);
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
