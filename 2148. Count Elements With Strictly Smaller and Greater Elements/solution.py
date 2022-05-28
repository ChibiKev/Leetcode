class Solution(object):
  def countElements(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    minimum = float('inf')
    maximum = float('-inf')
    for num in nums:
      if num > maximum:
        maximum = num
      if num < minimum:
        minimum = num
    
    count = 0
    for num in nums:
      if num < maximum and num > minimum:
        count += 1
        
    return count