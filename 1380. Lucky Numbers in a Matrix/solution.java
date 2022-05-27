class Solution {
  public List<Integer> luckyNumbers (int[][] matrix) {
    int[] rows = new int[matrix.length];
    Arrays.fill(rows, 1000000);
    int[] columns = new int[matrix[0].length];
    Arrays.fill(columns, 0);
    for (int i = 0; i < matrix.length; i++){
      for (int j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] < rows[i]){
          rows[i] = matrix[i][j];
        }
        if (matrix[i][j] > columns[j]){
          columns[j] = matrix[i][j];
        }
      }
    }

    for (int index = 0; index < rows.length; index++){
      int row = rows[index];
      for (int index2 = 0; index2 < columns.length; index2++){
        int column = columns[index2];
        if (row == column){
          return Arrays.asList(row);
        }
      }
    }
    return Arrays.asList();
  }
}