class Solution(object):
  def semiOrderedPermutation(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    indexOne = 0
    indexN = len(nums) - 1
    for index, num in enumerate(nums):
      if num == 1:
        indexOne = index
      if num == len(nums):
        indexN = index
    
    total = (indexOne - 0) + (len(nums) - 1 - indexN)
    if indexN < indexOne:
      total -= 1
    return total