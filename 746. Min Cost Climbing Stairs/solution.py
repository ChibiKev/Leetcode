class Solution(object):
  def minCostClimbingStairs(self, cost):
    """
    :type cost: List[int]
    :rtype: int
    """
    first = cost[0]
    second = cost[1]
    if len(cost) <= 2:
      return min(first, second)
    
    for num in cost[2:]:
      currrent = num + min(first, second)
      first = second
      second = currrent
      
    return min(first, second)