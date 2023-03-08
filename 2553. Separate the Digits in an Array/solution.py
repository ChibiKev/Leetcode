class Solution(object):
  def separateDigits(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    result = []
    nums.reverse()
    for num in nums:
      while num != 0:
        digit = num % 10
        num /= 10
        result.append(digit)
    
    result.reverse()
    return result