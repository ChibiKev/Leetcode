class Solution {
public:
  vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
    vector<vector<int>> result;
    for (int row = 1; row < grid.size() - 1; row++){
      vector<int> output;
      for (int column = 1; column < grid[row].size() - 1; column++){
        int maximum = max({grid[row - 1][column - 1], grid[row - 1][column], grid[row - 1][column + 1], grid[row][column - 1], grid[row][column], grid[row][column + 1], grid[row + 1][column - 1], grid[row + 1][column], grid[row + 1][column + 1]});
        output.push_back(maximum);
      }
      result.push_back(output);
    }
    
    return result;
  }
};