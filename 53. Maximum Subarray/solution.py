class Solution(object):
  def maxSubArray(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    total = nums[0]
    maxValue = nums[0]
    
    for index, num in enumerate(nums[1:]):
      newAddition = 0
      if total > 0:
        newAddition = total
      total = num + newAddition
      if total > maxValue:
        maxValue = total
        
    return maxValue