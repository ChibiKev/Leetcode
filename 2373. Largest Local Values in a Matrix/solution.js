/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
 var largestLocal = function(grid) {
  let result = [];
  for (let row = 1; row < grid.length - 1; row++){
    let output = [];
    for (let column = 1; column < grid[row].length - 1; column++){
      let maximum = Math.max(grid[row - 1][column - 1], grid[row - 1][column], grid[row - 1][column + 1], grid[row][column - 1], grid[row][column], grid[row][column + 1], grid[row + 1][column - 1], grid[row + 1][column], grid[row + 1][column + 1]);
      output.push(maximum);
    }
    result.push(output);
  }
  
  return result;
};