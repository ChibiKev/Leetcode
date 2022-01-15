class Solution(object):
  def dominantIndex(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    maxValue = 0
    maxIndex = 0
    for index, num in enumerate(nums):
      if maxValue < num:
        maxValue = num
        maxIndex = index
    
    for num in nums:
      if maxValue < num * 2 and maxValue != num:
        return -1
      
    return maxIndex