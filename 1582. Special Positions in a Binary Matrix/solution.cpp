class Solution {
public:
  int numSpecial(vector<vector<int>>& mat) {
    vector<int> rowAmount(mat[0].size(), 0);
    vector<int> columnAmount(mat.size(), 0);

    for (int row = 0; row < mat.size(); row++){
      for (int column = 0; column < mat[row].size(); column++){
        int value = mat[row][column];
        rowAmount[column] += value;
        columnAmount[row] += value;
      }
    }

    int result = 0;
    for (int row = 0; row < mat.size(); row++){
      for (int column = 0; column < mat[row].size(); column++){
        int value = mat[row][column];
        if (value == 1 && rowAmount[column] == 1 && columnAmount[row] == 1){
          result += 1;
        }
      }
    }

    return result;
  }
};