class Solution(object):
  def isCovered(self, ranges, left, right):
    """
    :type ranges: List[List[int]]
    :type left: int
    :type right: int
    :rtype: bool
    """
    ranges = sorted(ranges)
    
    for range in ranges:
      if range[0] <= left and left <= range[1]:
        left = range[1] + 1
      if range[0] <= right and right <= range[1]:
        right = range[0] - 1
      if right < left:
        return True
      
    return False