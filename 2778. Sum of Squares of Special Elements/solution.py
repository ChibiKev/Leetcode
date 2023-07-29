class Solution(object):
  def sumOfSquares(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    total = 0
    numsLength = len(nums)
    for index, num in enumerate(nums):
      if numsLength % (index + 1) == 0:
        total += num * num
    return total