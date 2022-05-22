/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
  let rows = new Array(n).fill(0);
  let columns = new Array(m).fill(0);
  for (let index = 0; index < indices.length; index++){
    columns[indices[index][0]] ^= 1;
    rows[indices[index][1]] ^= 1;
  }

  let count = 0;
  for (let index = 0; index < rows.length; index++){
    let row = rows[index];
    for (let index2 = 0; index2 < columns.length; index2++){
      let column = columns[index2];
      if (row ^ column){
        count += 1;
      }
    }
  }

  return count;
};