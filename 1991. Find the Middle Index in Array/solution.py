class Solution(object):
  def findMiddleIndex(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    leftSum = 0
    rightSum = 0
    for num in nums:
      rightSum += num
      
    for index, num in enumerate(nums):
      rightSum -= num
      if leftSum == rightSum:
        return index
      leftSum += num
      
    return -1