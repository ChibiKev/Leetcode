/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
  let result = [];
  for (let column = 0; column < matrix[0].length; column++){
    let newRow = [];
    for (let row = 0; row < matrix.length; row++){
      newRow.push(matrix[row][column]);
    }
    result.push(newRow);
  }
  return result;
};