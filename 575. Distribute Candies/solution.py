class Solution(object):
  def distributeCandies(self, candyType):
    """
    :type candyType: List[int]
    :rtype: int
    """
    candyTypeSet = set(candyType)
    maximumCandy = len(candyType) / 2
    return min(maximumCandy, len(candyTypeSet))