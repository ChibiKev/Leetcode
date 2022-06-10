class Solution(object):
  def countGoodRectangles(self, rectangles):
    """
    :type rectangles: List[List[int]]
    :rtype: int
    """
    count = 0
    maxLen = 0
    for rectangle in rectangles:
      minLen = rectangle[0]
      if minLen > rectangle[1]:
        minLen = rectangle[1]
      if minLen > maxLen:
        maxLen = minLen
        count = 1
      elif minLen == maxLen:
        count += 1
        
    return count