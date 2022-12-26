class Solution {
public:
  int deleteGreatestValue(vector<vector<int>>& grid) {
    int answer = 0;
    vector<vector<int>> sortedGrid;
    for (int index = 0; index < grid.size(); index++){
      vector<int> row = grid[index];
      sort(row.begin(), row.end());
      sortedGrid.push_back(row);
    }

    for (int column = 0; column < sortedGrid[0].size(); column++){
      int maximum = 0;
      for (int row = 0; row < sortedGrid.size(); row++){
        if (sortedGrid[row][column] > maximum){
          maximum = sortedGrid[row][column];
        }
      }
      answer += maximum;
    }

    return answer;
  }
};