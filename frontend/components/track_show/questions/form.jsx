import React, { useState } from 'react';

const QuestionForm = props => {

  const [focused, setFocused] = useState(false);
  const focusTextarea = () => {
    
  }

  return (
    <form className="question-form">
      <label>Ask us a question about this song</label>
      { focused ?
        <textarea onBlur={() => setFocused(false)}/>
        : <input type="text" placeholder="Ask a question" onFocus={() => setFocused(true)} />}
    </form>
  )
};

export default QuestionForm;