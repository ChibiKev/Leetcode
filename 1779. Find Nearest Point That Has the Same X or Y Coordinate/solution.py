class Solution(object):
  def nearestValidPoint(self, x, y, points):
    """
    :type x: int
    :type y: int
    :type points: List[List[int]]
    :rtype: int
    """
    minDistance = float('inf')
    result = -1
    for index, point in enumerate(points):
      currentx = point[0]
      currenty = point[1]
      if currentx == x or currenty == y:
        distance = abs(currentx - x) + abs(currenty - y)
        if distance < minDistance:
          minDistance = distance
          result = index
    return result