class Solution(object):
  def minTimeToVisitAllPoints(self, points):
    """
    :type points: List[List[int]]
    :rtype: int
    """
    distance = 0
    for index in range(1, len(points)):
      last = points[index - 1]
      current = points[index]
      most = abs(current[0] - last[0])
      if abs(current[1] - last[1]) > most:
        most = abs(current[1] - last[1])
      distance += most
    return distance