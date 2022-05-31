class Solution {
public:
  int surfaceArea(vector<vector<int>>& grid) {
    int result = 0;
    for (int row = 0; row < grid.size(); row++){
      for (int column = 0; column < grid[row].size(); column++){
        int num = grid[row][column];
        if (num > 0){
          result += num * 4 + 2;
        }
        if (row > 0){
          int minimum = num;
          if (grid[row - 1][column] < minimum){
            minimum = grid[row - 1][column];
          }
          result -= minimum * 2;
        }
        if (column > 0){
          int minimum = num;
          if (grid[row][column - 1] < minimum){
            minimum = grid[row][column - 1];
          }
          result -= minimum * 2;
        }
      }
    }

    return result;
  }
};