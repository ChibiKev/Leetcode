/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
  let total = 0;
  for (let index = 0; index < mat.length; index++){
    total += mat[index][index];
    total += mat[index][mat.length - index - 1];
  }
  if (mat.length % 2 === 1){
    let mid = Math.floor(mat.length / 2);
    total -= mat[mid][mid];
  }
  return total;
};