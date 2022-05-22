class Solution {
  public int oddCells(int m, int n, int[][] indices) {
    int[] rows = new int[n];
    Arrays.fill(rows, 0);
    int[] columns = new int[m];
    for (int index = 0; index < indices.length; index++){
      columns[indices[index][0]] ^= 1;
      rows[indices[index][1]] ^= 1;
    }

    int count = 0;
    for (int index = 0; index < rows.length; index++){
      int row = rows[index];
      for (int index2 = 0; index2 < columns.length; index2++){
        int column = columns[index2];
        if ((row ^ column) == 1){
          count += 1;
        }
      }
    }

    return count;
  }
}