class Solution {
public:
  vector<int> findColumnWidth(vector<vector<int>>& grid) {
    vector<int> result;
    for (int column = 0; column < grid[0].size(); column++){
      int currentMax = 0;
      for (int row = 0; row < grid.size(); row++){
        string valueStr = to_string(grid[row][column]);
        if (valueStr.size() > currentMax){
          currentMax = valueStr.size();
        }
      }
      result.push_back(currentMax);
    }
    return result;
  }
};