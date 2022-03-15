class Solution {
  public int numSpecial(int[][] mat) {
    int[] rowAmount = new int[mat[0].length];
    Arrays.fill(rowAmount, 0);
    int[] columnAmount = new int[mat.length];
    Arrays.fill(columnAmount, 0);

    for (int row = 0; row < mat.length; row++){
      for (int column = 0; column < mat[row].length; column++){
        int value = mat[row][column];
        rowAmount[column] += value;
        columnAmount[row] += value;
      }
    }

    int result = 0;
    for (int row = 0; row < mat.length; row++){
      for (int column = 0; column < mat[row].length; column++){
        int value = mat[row][column];
        if (value == 1 && rowAmount[column] == 1 && columnAmount[row] == 1){
          result += 1;
        }
      }
    }

    return result;
  }
}