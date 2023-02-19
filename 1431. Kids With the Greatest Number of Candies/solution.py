class Solution(object):
  def kidsWithCandies(self, candies, extraCandies):
    """
    :type candies: List[int]
    :type extraCandies: int
    :rtype: List[bool]
    """
    result = []
    maxCandies = 0
    for candy in candies:
      if candy > maxCandies:
        maxCandies = candy
    
    for candy in candies:
      totalCandy = candy + extraCandies
      if totalCandy >= maxCandies:
        result.append(True)
      else:
        result.append(False)
    
    return result