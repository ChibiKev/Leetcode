class Solution(object):
  def shiftGrid(self, grid, k):
    """
    :type grid: List[List[int]]
    :type k: int
    :rtype: List[List[int]]
    """
    newGrid = []
    height = len(grid)
    width = len(grid[0])
    widthChange = k % width
    heightChange = k / width

    for row in grid:
      currentRow = []
      for value in row:
        currentRow.append(value)
      newGrid.append(currentRow)
    
    for rowIndex, row in enumerate(grid):
      for valueIndex, value in enumerate(row):
        newWidth = widthChange + valueIndex
        carryHeight = 0
        if newWidth > width - 1:
          carryHeight = 1
          newWidth -= width
        newHeight = heightChange + rowIndex + carryHeight
        if newHeight > height - 1:
          newHeight = newHeight % height
          
        newGrid[newHeight][newWidth] = value
    
    return newGrid