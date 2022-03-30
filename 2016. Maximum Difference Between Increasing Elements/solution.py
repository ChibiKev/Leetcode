class Solution(object):
  def maximumDifference(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    difference = -1
    minValue = nums[0]
    for index, num in enumerate(nums):
      if minValue > num:
        minValue = num
      elif minValue < num:
        newDifference = num - minValue
        if difference < newDifference:
          difference = newDifference
    return difference