class Solution(object):
  def findNonMinOrMax(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    sortedNums = sorted(nums)
    if len(sortedNums) > 2:
      return sortedNums[1]
    return -1