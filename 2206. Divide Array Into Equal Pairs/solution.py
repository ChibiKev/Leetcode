class Solution(object):
  def divideArray(self, nums):
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
        
    for num in dictionary:
      if dictionary[num] % 2 != 0:
        return False
      
    return True