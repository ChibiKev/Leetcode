class Solution {
public:
  int oddCells(int m, int n, vector<vector<int>>& indices) {
    vector<int> rows(n, 0);
    vector<int> columns(m, 0);
    for (int index = 0; index < indices.size(); index++){
      columns[indices[index][0]] ^= 1;
      rows[indices[index][1]] ^= 1;
    }

    int count = 0;
    for (int index = 0; index < rows.size(); index++){
      int row = rows[index];
      for (int index2 = 0; index2 < columns.size(); index2++){
        int column = columns[index2];
        if (row ^ column){
          count += 1;
        }
      }
    }

    return count;
  }
};