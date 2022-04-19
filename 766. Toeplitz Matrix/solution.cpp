class Solution {
public:
  bool isToeplitzMatrix(vector<vector<int>>& matrix) {
    for (int row = 0; row < matrix.size() - 1; row++){
      for (int column = 0; column < matrix[row].size() - 1; column++){
         if (matrix[row][column] != matrix[row + 1][column + 1]){
           return false;
         }
      }
    }

    return true;
  }
};