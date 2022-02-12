class Solution {
public:
    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {
      vector<vector<int>> newGrid;
      int height = grid.size();
      int width = grid[0].size();
      int widthChange = k % width;
      int heightChange = k / width;

      for (int rowIndex = 0; rowIndex < height; rowIndex++){
        vector<int> currentRow;
        for (int valueIndex = 0; valueIndex < width; valueIndex++){
          int value = grid[rowIndex][valueIndex];
          currentRow.push_back(value);
        }
        newGrid.push_back(currentRow);
      }

      for (int rowIndex = 0; rowIndex < height; rowIndex++){
        for (int valueIndex = 0; valueIndex < width; valueIndex++){
          int value = grid[rowIndex][valueIndex];
          int newWidth = widthChange + valueIndex;
          int carryHeight = 0;
          if (newWidth > width - 1){
            carryHeight = 1;
            newWidth -= width;
          }
          int newHeight = heightChange + rowIndex + carryHeight;
          if (newHeight > height - 1){
            newHeight = newHeight % height;
          }

          newGrid[newHeight][newWidth] = value;
        }
      }

      return newGrid;
    }
};