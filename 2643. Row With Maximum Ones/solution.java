class Solution {
  public int[] rowAndMaximumOnes(int[][] mat) {
    int[] result = new int[] {0, 0};
    for (int row = 0; row < mat.length; row++){
      int count = 0;
      for (int column = 0; column < mat[row].length; column++){
        if (mat[row][column] == 1){
          count += 1;
        }
      }
      if (count > result[1]){
        result[0] = row;
        result[1] = count;
      }
    }
    return result;
  }
}