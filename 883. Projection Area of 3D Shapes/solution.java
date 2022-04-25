class Solution {
  public int projectionArea(int[][] grid) {
    int result = 0;

    for (int row = 0; row < grid.length; row++){
      int x = 0;
      int y = 0;
      for (int column = 0; column < grid[row].length; column++){
        int current = grid[row][column];
        int swappedCurrent = grid[column][row];
        x = Math.max(x, current);
        y = Math.max(y, swappedCurrent);
        if (current > 0){
          result += 1;
        }
      }
      result += x + y;
    }
    return result;
  }
}