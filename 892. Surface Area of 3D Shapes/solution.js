/**
 * @param {number[][]} grid
 * @return {number}
 */
 var surfaceArea = function(grid) {
  let result = 0;
  for (let row = 0; row < grid.length; row++){
    for (let column = 0; column < grid[row].length; column++){
      let num = grid[row][column];
      if (num > 0){
        result += num * 4 + 2;
      }
      if (row > 0){
        let minimum = num;
        if (grid[row - 1][column] < minimum){
          minimum = grid[row - 1][column];
        }
        result -= minimum * 2;
      }
      if (column > 0){
        let minimum = num;
        if (grid[row][column - 1] < minimum){
          minimum = grid[row][column - 1];
        }
        result -= minimum * 2;
      }
    }
  }

  return result;
};