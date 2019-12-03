import React, { useState, useEffect } from 'react';
import autosize from 'autosize';

const UnansweredPanel = props => {
  const { question } = props;
  const [focused, setFocused] = useState(false);
  let textarea;
  useEffect(() => {
    if (textarea !== undefined) {
      textarea.focus();
      autosize(textarea);
    }
  });

  return (
    <li>
      {!focused && <h4>{question.title}</h4> }
      {focused ?
        <textarea
          ref={node => textarea = node}
          placeholder="Answer here" /> :
        <input
          type="text"
          placeholder="Answer here"
          onFocus={() => setFocused(true)} />
      }
    </li>
  )
};

export default UnansweredPanel;