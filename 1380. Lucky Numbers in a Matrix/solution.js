/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
  let rows = new Array(matrix.length).fill(1000000);
  let columns = new Array(matrix[0].length).fill(0);
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] < rows[i]){
        rows[i] = matrix[i][j];
      }
      if (matrix[i][j] > columns[j]){
        columns[j] = matrix[i][j];
      }
    }
  }

  for (let index = 0; index < rows.length; index++){
    let row = rows[index];
    for (let index2 = 0; index2 < columns.length; index2++){
      let column = columns[index2];
      if (row === column){
        return [row];
      }
    }
  }
  return [];
};