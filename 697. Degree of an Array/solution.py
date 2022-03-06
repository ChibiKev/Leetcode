class Solution(object):
  def findShortestSubArray(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    left = {}
    right = {}
    count = {}
    
    for index, num in enumerate(nums):
      if num not in left:
        left[num] = index
      right[num] = index
      if num not in count:
        count[num] = 1
      else:
        count[num] += 1
        
    maxCount = 0
    for num in count:
      if count[num] > maxCount:
        maxCount = count[num]
    
    result = float("inf")
    
    for num in count:
      if count[num] == maxCount:
        newResult = right[num] - left[num] + 1
        if newResult < result:
          result = newResult
          
    return result