class Solution(object):
  def minCostToMoveChips(self, position):
    """
    :type position: List[int]
    :rtype: int
    """
    even = 0
    odd = 0
    for chips in position:
      if chips % 2 == 0:
        even += 1
      else:
        odd += 1
    
    result = even
    if even > odd:
      result = odd
    
    return result