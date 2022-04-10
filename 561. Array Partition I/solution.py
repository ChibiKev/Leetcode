class Solution(object):
  def arrayPairSum(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    nums.sort()
    total = 0
    
    for index in range(0, len(nums), 2):
      total += nums[index]
      
    return total