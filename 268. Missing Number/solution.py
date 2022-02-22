class Solution(object):
  def missingNumber(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    total = 0
    for index, num in enumerate(nums):
      total += num
      total -= index
    total -= len(nums)
    return abs(total)