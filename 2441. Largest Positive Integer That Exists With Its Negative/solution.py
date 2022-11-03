class Solution(object):
  def findMaxK(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    mySet = set(nums)
    maxValue = -1
    for num in nums:
      if num > maxValue and -num in mySet:
        maxValue = num
    return maxValue