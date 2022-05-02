class Solution(object):
  def targetIndices(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    count = 0
    lessThanCount = 0
    
    for num in nums:
      if num == target:
        count += 1
      elif num < target:
        lessThanCount += 1
    
    result = []
    
    for amount in range(count):
      result.append(lessThanCount)
      lessThanCount += 1
    
    return result