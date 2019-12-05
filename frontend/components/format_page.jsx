import React from 'react';

const FormatHelpPage = props => {
  return (
    <div className="format-help-page">
      <h1>Formatting Help</h1>
      <p>Prodigy uses several features from the <a target="_blank"href="https://github.com/showdownjs/showdown">
        Showdown</a> Markdown converter library for annotation and question answer formatting.
      </p>
      <table>
        <tr>
          <th>Markdown</th>
          <th>Result</th>
        </tr>
        <tr>
          <td>*text*</td>
          <td>italics</td>
        </tr>
        <tr>
          <td>**text**</td>
          <td>bold</td>
        </tr>
        <tr>
          <td>> paragraph</td>
          <td>blockquote (add sign per line)</td>
        </tr>
        <tr>
          <td>[text](link)</td>
          <td>link with displayed text</td>
        </tr>
        <tr>
          <td>![text](link)</td>
          <td>links for images or Youtube videos</td>
        </tr>
        <tr>
          <td>{"<small>"}text{"</small>"}</td>
          <td>small text</td>
        </tr>
        <tr>
          <td>[tweet url]</td>
          <td>tweets (custom feature, not from Showdown)</td>
        </tr>
      </table>
    </div>
  )
};

export default FormatHelpPage;

// so far
// *text* for bold
// **text** for italics
// > paragraph here for blockquotes
// [text](link) for links, images, videos
// <small>text</small> for small text
// [tweet url] for tweets (this is custom!);