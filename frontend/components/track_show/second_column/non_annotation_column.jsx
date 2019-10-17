import React from 'react';

const NonAnnotationColumn = props => {
  let youtube_url;
  if (props.currentTrack)  {
    youtube_url = props.currentTrack.youtube_url;
  }

  let youtubeUrl;
  if (youtube_url !== undefined && youtube_url !== '' && youtube_url !== null) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = youtube_url.match(regExp);
    if (match && match[2].length == 11) {
      youtubeUrl = 'https://www.youtube.com/embed/' + match[2];
    }
    else {
      youtubeUrl = undefined;
    }
  }
  // https://stackoverflow.com/questions/28735459/how-to-validate-youtube-url-in-client-side-in-text-box

  return (
    <div className="non-annotation">
      { youtubeUrl &&
        <div className="video">
          <h3>Video</h3>
          <iframe
            src={`${youtubeUrl}`}
            frameBorder="0"
            samesite="none"
          />
        </div>
      }
    </div>
  )
};

export default NonAnnotationColumn;