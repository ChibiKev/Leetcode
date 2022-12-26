/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  let answer = 0;
  let sortedGrid = [];
  for (let index = 0; index < grid.length; index++){
    let row = grid[index];
    row.sort(function(a, b){return a-b});
    sortedGrid.push(row);
  }

  for (let column = 0; column < sortedGrid[0].length; column++){
    let maximum = 0;
    for (let row = 0; row < sortedGrid.length; row++){
      if (sortedGrid[row][column] > maximum){
        maximum = sortedGrid[row][column];
      }
    }
    answer += maximum;
  }

  return answer;
};