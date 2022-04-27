class Solution(object):
  def sortedSquares(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    result = [0] * len(nums)
    
    left = 0
    right = len(nums) - 1
    
    while left <= right:
      leftValue = abs(nums[left])
      rightValue = abs(nums[right])
      if leftValue < rightValue:
        result[right - left] = rightValue * rightValue
        right -= 1
      else:
        result[right - left] = leftValue * leftValue
        left += 1
        
    return result