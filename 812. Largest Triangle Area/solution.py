class Solution(object):
  def largestTriangleArea(self, points):
    """
    :type points: List[List[int]]
    :rtype: float
    """
    result = 0
    for i in points:
      for j in points:
        for k in points:
          area = 0.5 * abs(i[0] * j[1] + j[0] * k[1] + k[0] * i[1]- j[0] * i[1] - k[0] * j[1] - i[0] * k[1])
          if area > result:
            result = area
    return result