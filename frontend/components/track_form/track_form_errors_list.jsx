import React from 'react';

const TrackFormErrorsList = props => {
  const errorLis = props.errors.map((error, i) => <li key={i}>{error}</li>) 
  return (
    <div className="track-form-errors-container">
      <h3>{props.errors.length} errors prevented the track from being saved</h3>
      <ul className="track-form-errors-list">
        { errorLis }
      </ul>
    </div>
  );
};

export default TrackFormErrorsList;