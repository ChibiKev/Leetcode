class Solution(object):
  def climbStairs(self, n):
    """
    :type n: int
    :rtype: int
    """
    result = [1, 1, 2]
    
    for index in range(3, n + 1):
      nextIteration = result[index - 1] + result[index - 2]
      result.append(nextIteration)
    
    return result[n]