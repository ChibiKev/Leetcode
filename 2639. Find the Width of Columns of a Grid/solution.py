class Solution(object):
  def findColumnWidth(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: List[int]
    """
    result = []
    for column in range(len(grid[0])):
      currentMax = 0
      for row in range(len(grid)):
        valueStr = str(grid[row][column])
        if len(valueStr) > currentMax:
          currentMax = len(valueStr)
      result.append(currentMax)
    return result