class Solution {
  public int islandPerimeter(int[][] grid) {
    int islands = 0;
    int neighbors = 0;

    for (int row = 0; row < grid.length; row++){
      for (int column = 0; column < grid[row].length; column++){
        if (grid[row][column] == 1){
          islands += 1;
          if (row < grid.length - 1 && grid[row + 1][column] == 1){
            neighbors += 1;
          }
          if (column < grid[row].length - 1 && grid[row][column + 1] == 1){
            neighbors += 1;
          }
        }
      }
    }

    return islands * 4 - neighbors * 2;
  }
}