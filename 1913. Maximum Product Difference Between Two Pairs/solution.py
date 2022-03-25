class Solution(object):
  def maxProductDifference(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    max1 = 0
    max2 = 0
    min1 = float('inf')
    min2 = float('inf')
    
    for num in nums:
      if num > max1:
        max2 = max1
        max1 = num
      elif num > max2:
        max2 = num
      if num < min1:
        min2 = min1
        min1 = num
      elif num < min2:
        min2 = num
    
    return (max1 * max2) - (min1 * min2)