class Solution {
  public boolean checkXMatrix(int[][] grid) {
    int amountOfZeros = 0;
    for (int row = 0; row < grid.length; row++){
      for (int column = 0; column < grid[row].length; column++){
        if (grid[row][column] == 0){
          amountOfZeros += 1;
        }
      }
    }

    for (int x = 0; x < grid.length; x++){
      if (grid[x][x] == 0 || grid[x][grid.length - x - 1] == 0){
        return false;
      }
    }
    
    if (amountOfZeros != grid.length * grid.length - 2 * grid.length + grid.length % 2){
      return false;
    }
    
    return true;
  }
}