class Solution(object):
  def maxCount(self, m, n, ops):
    """
    :type m: int
    :type n: int
    :type ops: List[List[int]]
    :rtype: int
    """
    if len(ops) == 0:
      return m * n
    
    x, y = zip(*ops)
    
    smallestX = x[0]
    smallestY = y[0]
    for value in x:
      if value < smallestX:
        smallestX = value

    for value in y:
      if value < smallestY:
        smallestY = value
    return smallestX * smallestY