class Solution(object):
  def largestLocal(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: List[List[int]]
    """
    result = []
    for row in range(1, len(grid) - 1):
      output = []
      for column in range(1, len(grid[row]) - 1):
        maximum = max(grid[row - 1][column - 1], grid[row - 1][column], grid[row - 1][column + 1], grid[row][column - 1], grid[row][column], grid[row][column + 1], grid[row + 1][column - 1], grid[row + 1][column], grid[row + 1][column + 1])
        output.append(maximum)

      result.append(output)
    return result