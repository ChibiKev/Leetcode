/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  let matRow = mat.length;
  let matLength = mat[0].length;
  if (matRow * matLength !== r * c){
    return mat;
  }

  let newList = [];
  let stored = [];
  for (let row of mat){
    for (let value of row){
      stored.push(value);
      if (stored.length === c){
        newList.push(stored);
        stored = [];
      }
    }
  }

  return newList;
};