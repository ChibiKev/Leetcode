class Solution(object):
  def countNegatives(self, grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    count = 0
    for row in grid:
      for value in row:
        if value < 0:
          count += 1
    
    return count