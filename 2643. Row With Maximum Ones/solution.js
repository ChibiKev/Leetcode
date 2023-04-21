/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let result = [0, 0];
  for (let row = 0; row < mat.length; row++){
    let count = 0;
    for (let column = 0; column < mat[row].length; column++){
      if (mat[row][column] == 1){
        count += 1;
      }
    }
    if (count > result[1]){
      result = [row, count];
    }
  }
  return result;
};