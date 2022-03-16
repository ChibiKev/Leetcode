class Solution(object):
  def findDisappearedNumbers(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    for index in range(len(nums)):
      newIndex = abs(nums[index]) - 1
      nums[newIndex] = -abs(nums[newIndex])
      
    result = []
    for index, value in enumerate(nums):
      if value > 0:
        result.append(index + 1)
        
    return result