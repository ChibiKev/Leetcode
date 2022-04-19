/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
  for (let row = 0; row < matrix.length - 1; row++){
    for (let column = 0; column < matrix[row].length - 1; column++){
       if (matrix[row][column] !== matrix[row + 1][column + 1]){
         return false;
       }
    }
  }

  return true;
};