class Solution(object):
  def averageValue(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    count = 0
    total = 0
    for num in nums:
      if num % 2 == 0 and num % 3 == 0:
        count += 1
        total += num
    
    if count == 0:
      return 0

    return total / count