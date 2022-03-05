class Solution(object):
  def maxSubsequence(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: List[int]
    """
    result = []
    sortedNums = sorted(nums, reverse = True)
    highestNums = sortedNums[:k]
    for num in nums:
      if num in highestNums:
        result.append(num)
        highestNums.remove(num)
    return result