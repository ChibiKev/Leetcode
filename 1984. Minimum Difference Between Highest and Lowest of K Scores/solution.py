class Solution(object):
  def minimumDifference(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: int
    """
    nums.sort()
    result = nums[k - 1] - nums[0]
    for index in range(k, len(nums)):
      if nums[index] - nums[index - k + 1] < result:
        result = nums[index] - nums[index - k + 1]
    return result