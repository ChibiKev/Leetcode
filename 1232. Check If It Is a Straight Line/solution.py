class Solution(object):
  def checkStraightLine(self, coordinates):
    """
    :type coordinates: List[List[int]]
    :rtype: bool
    """
    x0 = coordinates[0][0]
    y0 = coordinates[0][1]
    x1 = coordinates[1][0]
    y1 = coordinates[1][1]
    dy = y1 - y0
    dx = x1 - x0
    for index in range(2, len(coordinates)):
      x = coordinates[index][0]
      y = coordinates[index][1]
      if dx * (y - y1) != dy * (x - x1):
        return False

    return True