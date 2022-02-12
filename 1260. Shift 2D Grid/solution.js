/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
  let newGrid = [];
  let height = grid.length;
  let width = grid[0].length;
  let widthChange = k % width;
  let heightChange = Math.floor(k / width);

  for (let rowIndex = 0; rowIndex < height; rowIndex++){
    let row = grid[rowIndex];
    let currentRow = [];
    for (let valueIndex = 0; valueIndex < width; valueIndex++){
      let value = row[valueIndex];
      currentRow.push(value);
    }
    newGrid.push(currentRow);
  }
  
  for (let rowIndex = 0; rowIndex < height; rowIndex++){
    let row = grid[rowIndex];
    for (let valueIndex = 0; valueIndex < width; valueIndex++){
      let value = row[valueIndex];
      let newWidth = widthChange + valueIndex;
      let carryHeight = 0;
      if (newWidth > width - 1){
        carryHeight = 1;
        newWidth -= width;
      }
      let newHeight = heightChange + rowIndex + carryHeight;
      if (newHeight > height - 1){
        newHeight = newHeight % height;
      }
      
      newGrid[newHeight][newWidth] = value;
    }
  }

  return newGrid;
};