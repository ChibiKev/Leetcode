class Solution {
public:
  int diagonalSum(vector<vector<int>>& mat) {
    int total = 0;
    for (int index = 0; index < mat.size(); index++){
      total += mat[index][index];
      total += mat[index][mat.size() - index - 1];
    }
    if (mat.size() % 2 == 1){
      int mid = mat.size() / 2;
      total -= mat[mid][mid];
    }
    return total;
  }
};