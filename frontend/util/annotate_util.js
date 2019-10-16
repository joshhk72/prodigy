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

  if (!container) { return { i1: 0, i2: 0, j1: 0, j2: 0 } }
  if (!baseNode) { return { i1: 0, i2: 0, j1: 0, j2: 0 } }
  if (!extentNode) { return { i1: 0, i2: 0, j1: 0, j2: 0 } }
  
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

export const displayHeightStyle = (annotationId, top) => {
  const lyricsContainer = document.getElementById("lyrics-rect");
  const span = document.getElementById(annotationId);

  // "top" comes from when the form is made, but is not ideal for the display
  // since the user might scroll in between submitting the form and looking at
  // the annotation-show

  let style
  if (span) {
    const top1 = lyricsContainer.getBoundingClientRect().top;
    const top2 = span.getBoundingClientRect().top;
    style = { marginTop: `${Math.max(top2 - top1, 0)}px` };
    // It'll probably never be 0px on the current page setup, but just in case...
  } else {
    style = { marginTop: `${top}px` };
  }

  return style;
};