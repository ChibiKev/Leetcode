class Solution {
  public int[][] transpose(int[][] matrix) {
    int[][] result = new int[matrix[0].length][matrix.length];
    for (int column = 0; column < matrix[0].length; column++){
      int[] newRow = new int[matrix.length];
      for (int row = 0; row < matrix.length; row++){
        newRow[row] = matrix[row][column];
      }
      result[column] = newRow;
    }
    return result;
  }
}