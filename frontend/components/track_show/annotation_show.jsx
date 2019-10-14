import React from 'react';

const AnnotationShow = props => {
  const hey = Boolean(props.match.params.annotationId.match(/^[0-9]/));

  return hey ? 
    (<div></div>) 
    : (<div></div>)
};

export default AnnotationShow;