class Solution {
public:
  int islandPerimeter(vector<vector<int>>& grid) {
    int islands = 0;
    int neighbors = 0;

    for (int row = 0; row < grid.size(); row++){
      for (int column = 0; column < grid[row].size(); column++){
        if (grid[row][column] == 1){
          islands += 1;
          if (row < grid.size() - 1 && grid[row + 1][column] == 1){
            neighbors += 1;
          }
          if (column < grid[row].size() - 1 && grid[row][column + 1] == 1){
            neighbors += 1;
          }
        }
      }
    }

    return islands * 4 - neighbors * 2;
  }
};