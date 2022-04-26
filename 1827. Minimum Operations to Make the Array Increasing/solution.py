class Solution(object):
  def minOperations(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    total = 0
    last = 0
    for num in nums:
      if num <= last:
        total += (last - num) + 1
        num = last + 1
      last = num
    return total