class Solution {
  public List<List<Integer>> shiftGrid(int[][] grid, int k) {
    List<List<Integer>> newGrid = new ArrayList<List<Integer>>();
    int height = grid.length;
    int width = grid[0].length;
    int widthChange = k % width;
    int heightChange = k / width;

    for (int rowIndex = 0; rowIndex < height; rowIndex++){
      List<Integer> currentRow = new ArrayList<Integer>();
      for (int valueIndex = 0; valueIndex < width; valueIndex++){
        int value = grid[rowIndex][valueIndex];
        currentRow.add(value);
      }
      newGrid.add(currentRow);
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

        newGrid.get(newHeight).set(newWidth, value);
      }
    }

    return newGrid;
  }
}