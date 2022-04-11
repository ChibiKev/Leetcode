class Solution(object):
  def allCellsDistOrder(self, rows, cols, rCenter, cCenter):
    """
    :type rows: int
    :type cols: int
    :type rCenter: int
    :type cCenter: int
    :rtype: List[List[int]]
    """
    def distance(grid):
        row = grid[0]
        column = grid[1]
        return abs(row - rCenter) + abs(column - cCenter)

    result = []
    for row in range(rows):
      for column in range(cols):
        result.append([row, column])
        
    return sorted(result, key = distance)