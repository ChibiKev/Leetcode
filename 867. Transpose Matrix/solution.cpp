class Solution {
public:
  vector<vector<int>> transpose(vector<vector<int>>& matrix) {
    vector<vector<int>> result;
    for (int column = 0; column < matrix[0].size(); column++){
      vector<int> newRow;
      for (int row = 0; row < matrix.size(); row++){
        newRow.push_back(matrix[row][column]);
      }
      result.push_back(newRow);
    }
    return result;
  }
};