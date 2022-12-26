class Solution {
  public int deleteGreatestValue(int[][] grid) {
    int answer = 0;
    for (int index = 0; index < grid.length; index++){
      Arrays.sort(grid[index]);
    }

    for (int column = 0; column < grid[0].length; column++){
      int maximum = 0;
      for (int row = 0; row < grid.length; row++){
        if (grid[row][column] > maximum){
          maximum = grid[row][column];
        }
      }
      answer += maximum;
    }

    return answer;
  }
}