class Solution(object):
  def checkXMatrix(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: bool
    """
    amountOfZeros = 0
    for row in grid:
      for value in row:
        if value == 0:
          amountOfZeros += 1

    for x in range(len(grid)):
      if grid[x][x] == 0 or grid[x][-x - 1] == 0:
        return False
    
    if amountOfZeros != len(grid) * len(grid) - 2 * len(grid) + len(grid) % 2:
      return False
    
    return True