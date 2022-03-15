/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
  let rowAmount = new Array(mat[0].length).fill(0);
  let columnAmount = new Array(mat.length).fill(0);

  for (let row = 0; row < mat.length; row++){
    for (let column = 0; column < mat[row].length; column++){
      let value = mat[row][column];
      rowAmount[column] += value;
      columnAmount[row] += value;
    }
  }

  let result = 0;
  for (let row = 0; row < mat.length; row++){
    for (let column = 0; column < mat[row].length; column++){
      let value = mat[row][column];
      if (value === 1 && rowAmount[column] === 1 && columnAmount[row] === 1){
        result += 1;
      }
    }
  }

  return result;
};