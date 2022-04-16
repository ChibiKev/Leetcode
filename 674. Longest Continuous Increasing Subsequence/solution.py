class Solution(object):
  def findLengthOfLCIS(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    maxSub = 0
    counter = 1
    for index in range(1, len(nums)):
      prevNum = nums[index - 1]
      num = nums[index]
      if prevNum >= num:
        maxSub = max(maxSub, counter)
        counter = 1
      else:
        counter += 1
    return max(maxSub, counter)