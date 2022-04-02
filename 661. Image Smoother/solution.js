/**
 * @param {number[][]} img
 * @return {number[][]}
 */
 var imageSmoother = function(img) {
  let rowLength = img.length;
  let columnLength = img[0].length;
  let result = [];
  for (let row = 0; row < rowLength; row++){
    let stored = [];
    for (let column = 0; column < columnLength; column++){
      stored.push(img[row][column]);
    }
    result.push(stored);
  }

  for (let row = 0; row < rowLength; row++){
    for (let column = 0; column < columnLength; column++){
      let total = 0;
      let count = 0;
      let rowStart = Math.max(row - 1, 0);
      let rowEnd = Math.min(row + 2, rowLength);
      let columnStart = Math.max(column - 1, 0);
      let columnEnd = Math.min(column + 2, columnLength);
      for (let currentRow = rowStart; currentRow < rowEnd; currentRow++){
        for (let currentColumn = columnStart; currentColumn < columnEnd; currentColumn++){
          total += img[currentRow][currentColumn];
          count += 1;
        }
      }
      result[row][column] = Math.floor(total/count);
    }
  }

  return result;
};