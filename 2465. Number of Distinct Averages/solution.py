class Solution(object):
  def distinctAverages(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    nums.sort()
    averages = set()
    for index in range(0, len(nums) / 2):
      averages.add((float(nums[index] + nums[len(nums) - index - 1]) / 2))
    
    return len(averages)