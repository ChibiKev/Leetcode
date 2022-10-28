class Solution {
  public int[][] largestLocal(int[][] grid) {
    int[][] result = new int[grid.length - 2][grid.length - 2];
    for (int row = 1; row < grid.length - 1; row++){
      int[] output = new int[grid.length - 2];
      for (int column = 1; column < grid[row].length - 1; column++){
        int maximum = Collections.max(Arrays.asList(grid[row - 1][column - 1], grid[row - 1][column], grid[row - 1][column + 1], grid[row][column - 1], grid[row][column], grid[row][column + 1], grid[row + 1][column - 1], grid[row + 1][column], grid[row + 1][column + 1]));
        output[column - 1] = maximum;
      }
      result[row - 1] = output;
    }
    
    return result;
  }
}