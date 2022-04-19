class Solution {
  public boolean isToeplitzMatrix(int[][] matrix) {
    for (int row = 0; row < matrix.length - 1; row++){
      for (int column = 0; column < matrix[row].length - 1; column++){
         if (matrix[row][column] != matrix[row + 1][column + 1]){
           return false;
         }
      }
    }

    return true;
  }
}