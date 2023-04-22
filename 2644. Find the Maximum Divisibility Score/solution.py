class Solution(object):
  def maxDivScore(self, nums, divisors):
    """
    :type nums: List[int]
    :type divisors: List[int]
    :rtype: int
    """
    divisibilityValue = divisors[0]
    maxCount = 0
    for divisor in divisors:
      count = 0
      for num in nums:
        if num % divisor == 0:
          count += 1
      if count > maxCount:
        divisibilityValue = divisor
        maxCount = count
      elif count == maxCount and divisor < divisibilityValue:
        divisibilityValue = divisor
    return divisibilityValue