class Solution(object):
  def maxAscendingSum(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    maxValue = 0
    currentValue = 0
    lastValue = 0
    for index, num in enumerate(nums):
      if currentValue > maxValue:
        maxValue = currentValue
      if num <= lastValue:
        currentValue = 0
      currentValue += num
      lastValue = num
    if currentValue > maxValue:
      maxValue = currentValue
    return maxValue