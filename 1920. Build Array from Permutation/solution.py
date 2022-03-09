class Solution(object):
  def buildArray(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    result = [0] * len(nums)
    for index, num in enumerate(nums):
      result[index] = nums[num]
      
    return result