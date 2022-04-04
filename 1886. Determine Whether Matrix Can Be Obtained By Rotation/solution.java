class Solution {
  public boolean findRotation(int[][] mat, int[][] target) {
    Boolean[] check = {true, true, true, true};
    int matLength = mat.length;
    for (int row = 0; row < matLength; row++){
      for (int column = 0; column < matLength; column++){
        if (mat[row][column] != target[row][column]){
          check[0] = false;
        }
        if (mat[row][column] != target[matLength - column - 1][row]){
          check[1] = false;
        }
        if (mat[row][column] != target[matLength - row - 1][matLength - column - 1]){
          check[2] = false;
        }
        if (mat[row][column] != target[column][matLength - row - 1]){
          check[3] = false;
        }
      }
    }

    return check[0] || check[1] || check[2] || check[3];
  }
}