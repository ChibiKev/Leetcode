/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  let result = [];
  for (let column = 0; column < grid[0].length; column++){
    let currentMax = 0;
    for (let row = 0; row < grid.length; row++){
      let valueStr = grid[row][column].toString();
      if (valueStr.length > currentMax){
        currentMax = valueStr.length;
      }
    }
    result.push(currentMax);
  }
  return result;
};