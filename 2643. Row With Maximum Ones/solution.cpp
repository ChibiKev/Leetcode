class Solution {
public:
  vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
    vector<int> result {0, 0};
    for (int row = 0; row < mat.size(); row++){
      int count = 0;
      for (int column = 0; column < mat[row].size(); column++){
        if (mat[row][column] == 1){
          count += 1;
        }
      }
      if (count > result[1]){
        result = {row, count};
      }
    }
    return result;
  }
};