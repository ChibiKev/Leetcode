class Solution(object):
  def islandPerimeter(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    islands = 0
    neighbors = 0
    
    for row in range(len(grid)):
      for column in range(len(grid[row])):
        if grid[row][column] == 1:
          islands += 1
          if row < len(grid) - 1 and grid[row + 1][column] == 1:
            neighbors += 1
          if column < len(grid[row]) - 1 and grid[row][column + 1] == 1:
            neighbors += 1

    return islands * 4 - neighbors * 2