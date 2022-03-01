class Solution(object):
  def repeatedNTimes(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    recordedNums = set()
    for num in nums:
      if num in recordedNums:
        return num
      recordedNums.add(num)