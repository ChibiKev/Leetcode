class Solution(object):
  def projectionArea(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    result = 0
    
    for row in range(len(grid)):
      x = 0
      y = 0
      for column in range(len(grid[row])):
        x = max(x, grid[row][column])
        y = max(y, grid[column][row])
        if grid[row][column] > 0:
          result += 1
      result += x + y
    return result