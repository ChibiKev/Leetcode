class Solution(object):
  def prefixesDivBy5(self, nums):
    """
    :type nums: List[int]
    :rtype: List[bool]
    """
    current = 0
    result = []
    
    for num in nums:
      current = (current * 2 + num) % 5
      result.append(current == 0)
    
    return result