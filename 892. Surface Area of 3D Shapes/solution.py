class Solution(object):
  def surfaceArea(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    result = 0
    for row in range(len(grid)):
      for column in range(len(grid[row])):
        num = grid[row][column]
        if num > 0:
          result += num * 4 + 2
        if row > 0:
          minimum = num
          if grid[row - 1][column] < minimum:
            minimum = grid[row - 1][column]
          result -= minimum * 2
        if column > 0:
          minimum = num
          if grid[row][column - 1] < minimum:
            minimum = grid[row][column - 1]
          result -= minimum * 2
          
    return result