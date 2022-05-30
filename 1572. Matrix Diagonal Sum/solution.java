class Solution {
  public int diagonalSum(int[][] mat) {
    int total = 0;
    for (int index = 0; index < mat.length; index++){
      total += mat[index][index];
      total += mat[index][mat.length - index - 1];
    }
    if (mat.length % 2 == 1){
      int mid = mat.length / 2;
      total -= mat[mid][mid];
    }
    return total;
  }
}