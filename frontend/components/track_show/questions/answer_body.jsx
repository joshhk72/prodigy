import React from 'react';
import showdown from 'showdown';

const AnswerBody = props => {
  const { answer } = props;
  const converter = new showdown.Converter();
  const html = converter.makeHtml(answer.body);
  // don't need to sanitize html because it's only on the client side
  console.log(html);
  // const split = answer.body.split(/\r?\n/);
  // const parsed = split.map((line, i) => {
  //   return <p key={String(answer.id) + '-' + String(i)}>{line}</p>
  // })
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
// [text](link) for links