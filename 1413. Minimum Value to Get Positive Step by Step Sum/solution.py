class Solution(object):
  def minStartValue(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    start = 1
    total = start
    for num in nums:
      total += num
      if total < 1:
        missing = 1 - total
        start += missing
        total += missing
    return start