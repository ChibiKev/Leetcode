class Solution(object):
  def differenceOfSum(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    elementSum = 0
    digitSum = 0
    for num in nums:
      elementSum += num
      while num != 0:
        digit = num % 10
        num /= 10
        digitSum += digit
    return abs(elementSum - digitSum)