export const annotationsNotSelected = (annotationNodes) => {
  return !Object.values(annotationNodes)
    .some(node => window.getSelection().containsNode(node, true))
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
  return lyricsStr.split(/\n/).join('<br>');
};

export const mapNodeList = nodeList => {
  return Array.from(nodeList).map(node => {
    if (node.nodeName === "BR") {
      return '\n';
    } else if (node.nodeName === "SPAN") {
      return node.innerText;
    } else if (node.nodeName === "#text") {
      return node.nodeValue;
    }
  });
};

export const getIndices = (container) => {
  const selection = window.getSelection();
  const { baseNode, extentNode } = window.getSelection();
  let i1, i2, j1, j2;
  
  i1 = Array.prototype.indexOf.call(container.childNodes, selection.baseNode);
  i2 = Array.prototype.indexOf.call(container.childNodes, selection.extentNode);
  j1 = selection.baseOffset;
  j2 = selection.extentOffset;
  if (baseNode.parentElement.id !== 'lyrics-container' && extentNode.parentElement.id !== 'lyrics-container') {
    [i1, i2, j1, j2] = [0, 0, 0, 0];
  } else if (baseNode.parentElement.id !== 'lyrics-container') {
    i1 = selection.baseOffset + 1;
    j1 = 0;
  } else if (extentNode.parentElement.id !== 'lyrics-container') {
    if (selection.extentOffset < i1) {
      i2 = selection.extentOffset + 1;
      j2 = 0
    } else {
      i2 = selection.extentOffset - 2;
      if (container.childNodes[i2].nodeValue !== null) {
        j2 = container.childNodes[i2].nodeValue.length;
      } else {
        j2 = 0;
      }
    }
  }
  return { i1, i2, j1, j2 };
}

export const getStartAndEndIndices = (mappedNodeList, indices) => {
  const { i1, i2, j1, j2 } = indices;
  const prevOne = mappedNodeList.map(mappedNode => mappedNode.length).slice(0, i1).reduce((a, b) => a + b, 0);
  const prevTwo = mappedNodeList.map(mappedNode => mappedNode.length).slice(0, i2).reduce((a, b) => a + b, 0);
  const oneIndex = prevOne + j1;
  const twoIndex = prevTwo + j2;
  return { startIdx: Math.min(oneIndex, twoIndex) , endIdx: Math.max(oneIndex, twoIndex) };
};

export const rearrangeRange = ({ i1, i2, j1, j2 }) => {
  const range = document.createRange();
  const lyricsContainer = document.getElementById("lyrics-container");
  if (i1 < i2) {
    range.setStart(lyricsContainer.childNodes[i1], j1);
    range.setEnd(lyricsContainer.childNodes[i2], j2);
  } else if (i1 > i2) {
    range.setStart(lyricsContainer.childNodes[i2], j2);
    range.setEnd(lyricsContainer.childNodes[i1], j1);
  } else {
    range.setStart(lyricsContainer.childNodes[i1], Math.min(j1, j2));
    range.setEnd(lyricsContainer.childNodes[i2], Math.max(j1, j2));
  }
  return range;
}
