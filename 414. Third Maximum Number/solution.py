class Solution(object):
  def thirdMax(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    max1 = float('-inf')
    max2 = float('-inf')
    max3 = float('-inf')
    
    for num in nums:
      if num == max1 or num == max2 or num == max3:
        continue
      if num > max1:
        max3 = max2
        max2 = max1
        max1 = num
      elif num > max2:
        max3 = max2
        max2 = num
      elif num > max3:
        max3 = num
    
    result = max1
    if max3 != float('-inf'):
      result = max3
      
    return result