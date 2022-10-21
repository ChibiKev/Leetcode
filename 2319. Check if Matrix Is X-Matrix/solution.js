/**
 * @param {number[][]} grid
 * @return {boolean}
 */
 var checkXMatrix = function(grid) {
  let amountOfZeros = 0;
  for (let row = 0; row < grid.length; row++){
    for (let column = 0; column < grid[row].length; column++){
      if (grid[row][column] == 0){
        amountOfZeros += 1;
      }
    }
  }

  for (let x = 0; x < grid.length; x++){
    if (grid[x][x] == 0 || grid[x][grid.length - x - 1] == 0){
      return false;
    }
  }
  
  if (amountOfZeros != grid.length * grid.length - 2 * grid.length + grid.length % 2){
    return false;
  }
  
  return true;
};