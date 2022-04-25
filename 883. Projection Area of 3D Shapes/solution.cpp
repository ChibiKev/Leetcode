class Solution {
public:
  int projectionArea(vector<vector<int>>& grid) {
    int result = 0;

    for (int row = 0; row < grid.size(); row++){
      int x = 0;
      int y = 0;
      for (int column = 0; column < grid[row].size(); column++){
        int current = grid[row][column];
        int swappedCurrent = grid[column][row];
        x = max(x, current);
        y = max(y, swappedCurrent);
        if (current > 0){
          result += 1;
        }
      }
      result += x + y;
    }
    return result;
  }
};