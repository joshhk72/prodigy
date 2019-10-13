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