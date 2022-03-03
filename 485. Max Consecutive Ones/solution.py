class Solution(object):
  def findMaxConsecutiveOnes(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    maxNums = 0
    count = 0
    for num in nums:
      if num == 0:
        if count > maxNums:
          maxNums = count
        count = 0
      else:
        count += 1
        
    return max(maxNums, count)