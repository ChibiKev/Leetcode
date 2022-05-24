class Solution(object):
  def findKDistantIndices(self, nums, key, k):
    """
    :type nums: List[int]
    :type key: int
    :type k: int
    :rtype: List[int]
    """
    keys = []
    for index, num in enumerate(nums):
      if key == num:
        keys.append(index)
    
    keyIndex = 0
    result = []
    for index in range(len(nums)):
      if keyIndex < len(keys):
        if abs(index - keys[keyIndex]) <= k:
          result.append(index)
        elif keyIndex + 1 < len(keys):
          if abs(index - keys[keyIndex + 1]) <= k:
            keyIndex += 1
            result.append(index)
          
    return result