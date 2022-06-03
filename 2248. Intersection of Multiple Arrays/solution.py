class Solution(object):
  def intersection(self, nums):
    """
    :type nums: List[List[int]]
    :rtype: List[int]
    """
    result = set(nums[0])
    for num in nums[1:]:
      result = result & set(num)

    return sorted(result)