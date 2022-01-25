/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var checkValid = function(matrix) {
  let size = matrix.length;
  for (let row = 0; row < size; row++){
    let setRow = new Set();
    let setColumn = new Set();
    for (let column = 0; column < size; column++){
      if (setRow.has(matrix[row][column]) || setColumn.has(matrix[column][row])){
        return false;
      }
      setRow.add(matrix[row][column]);
      setColumn.add(matrix[column][row]);
    }
  }
  return true;
};