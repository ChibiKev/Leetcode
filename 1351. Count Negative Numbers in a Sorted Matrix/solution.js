/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
  let count = 0;
  for (let row of grid){
    for (let value of row){
      if (value < 0){
        count += 1;
      }
    }
  }
  
  return count;
};