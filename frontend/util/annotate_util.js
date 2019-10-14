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

export const annotateLyrics = (lyrics, annotations) => {
  let annotated = lyrics.split("");
  annotations.forEach(annotation => {
    annotated.splice(annotation.end_idx, 0, "</span>")
    annotated.splice(annotation.start_idx, 0, `<span class='annotated-lyrics' id=${annotation.id}>`)
  })

  return annotated.join("");
};

export const lineBreakLyrics = lyricsStr => {
  return lyricsStr.split(/\r?\n/).join('<br>');
};