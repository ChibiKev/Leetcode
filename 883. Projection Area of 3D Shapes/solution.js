/**
 * @param {number[][]} grid
 * @return {number}
 */
 var projectionArea = function(grid) {
  let result = 0;

  for (let row = 0; row < grid.length; row++){
    let x = 0;
    let y = 0;
    for (let column = 0; column < grid[row].length; column++){
      let current = grid[row][column];
      let swappedCurrent = grid[column][row];
      x = Math.max(x, current);
      y = Math.max(y, swappedCurrent);
      if (current > 0){
        result += 1;
      }
    }
    result += x + y;
  }
  return result;
};