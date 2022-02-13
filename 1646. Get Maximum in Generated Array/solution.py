class Solution(object):
  def getMaximumGenerated(self, n):
    """
    :type n: int
    :rtype: int
    """
    if n < 2:
      return n
    
    nums = [0, 1]
    maxValue = 1
    firstIndex = 1
    secondIndex = 1
    for value in range(2, n + 1):
      if value % 2 == 0:
        nums.append(nums[firstIndex])
        firstIndex += 1
      else:
        nums.append(nums[secondIndex] + nums[secondIndex + 1])
        secondIndex += 1
      if nums[-1] > maxValue:
        maxValue = nums[-1]

    return maxValue