import React from 'react';

export const onlyLyricsSelected = () => {
  const highStart = window.getSelection().baseNode
  const highEnd = window.getSelection().extentNode
  if (highStart && highEnd) {
    if (highStart.parentElement.id === 'lyrics-container' && highEnd.parentElement.id === 'lyrics-container') {
      return true;
    };
  };
  return false;
}

export const lineBreakLyrics = (lyricsStr) => {
  const lyricsArr = lyricsStr.split(/\r?\n/).reduce((acc, val, i) => acc.concat(val, <br key={i} />), []);
  return lyricsArr
};