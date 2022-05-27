class Solution {
public:
  vector<int> luckyNumbers (vector<vector<int>>& matrix) {
    vector<int> rows(matrix.size(), 1000000);
    vector<int> columns(matrix[0].size(), 0);
    for (int i = 0; i < matrix.size(); i++){
      for (int j = 0; j < matrix[i].size(); j++){
        if (matrix[i][j] < rows[i]){
          rows[i] = matrix[i][j];
        }
        if (matrix[i][j] > columns[j]){
          columns[j] = matrix[i][j];
        }
      }
    }

    for (int index = 0; index < rows.size(); index++){
      int row = rows[index];
      for (int index2 = 0; index2 < columns.size(); index2++){
        int column = columns[index2];
        if (row == column){
          return {row};
        }
      }
    }
    return {};
  }
};