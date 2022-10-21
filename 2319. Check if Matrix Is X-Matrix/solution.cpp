class Solution {
public:
  bool checkXMatrix(vector<vector<int>>& grid) {
    int amountOfZeros = 0;
    for (int row = 0; row < grid.size(); row++){
      for (int column = 0; column < grid[row].size(); column++){
        if (grid[row][column] == 0){
          amountOfZeros += 1;
        }
      }
    }

    for (int x = 0; x < grid.size(); x++){
      if (grid[x][x] == 0 || grid[x][grid.size() - x - 1] == 0){
        return false;
      }
    }
    
    if (amountOfZeros != grid.size() * grid.size() - 2 * grid.size() + grid.size() % 2){
      return false;
    }
    
    return true;
  }
};