/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
  let maxRows = mat.length;
  let maxColumns = mat[0].length;

  result = [];

  for (let columns = 0; columns < maxColumns; columns++){
    for (let rows = 0; rows < maxRows; rows++){
      if (result.includes(rows)){
        continue;
      }
      if (mat[rows][columns] === 0){
        result.push(rows);
        if (result.length === k){
          return result;
        }
      }
    }
  }
  
  if (result.length !== k){
    for (let rows = 0; rows < maxRows; rows++){
      if (result.includes(rows)){
        continue;
      }
      result.push(rows);
      if (result.length === k){
        return result;
      }
    }
  }
};