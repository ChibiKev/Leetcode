class Solution {
  public int[] findColumnWidth(int[][] grid) {
    int[] result = new int[grid[0].length];
    for (int column = 0; column < grid[0].length; column++){
      int currentMax = 0;
      for (int row = 0; row < grid.length; row++){
        String valueStr = String.valueOf(grid[row][column]);
        if (valueStr.length() > currentMax){
          currentMax = valueStr.length();
        }
      }
      result[column] = currentMax;
    }
    return result;
  }
}