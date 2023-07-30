class Solution(object):
  def isGood(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    dictionary = {}
    for num in nums:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1
    
    n = len(nums) - 1
    if n not in dictionary or dictionary[n] != 2:
      return False
    
    for num in dictionary:
      if num == n:
        continue
      if dictionary[num] > 1 or num > n:
        return False
    return True