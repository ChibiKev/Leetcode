class Solution(object):
  def getMinDistance(self, nums, target, start):
    """
    :type nums: List[int]
    :type target: int
    :type start: int
    :rtype: int
    """
    result = float("inf")
    for index, num in enumerate(nums):
      if num == target:
        newResult = abs(index - start)
        if newResult < result:
          result = newResult
          if result == 0:
            break
            
    return result