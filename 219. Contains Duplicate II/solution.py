class Solution(object):
  def containsNearbyDuplicate(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: bool
    """
    myDict = {}
    for index, num in enumerate(nums):
      if num in myDict:
        value = myDict[num]
        if abs(value - index) <= k:
          return True
      myDict[num] = index
    
    return False