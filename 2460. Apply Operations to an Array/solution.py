class Solution(object):
  def applyOperations(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    for index in range(len(nums) - 1):
      currentNum = nums[index]
      nextNum = nums[index + 1]
      if currentNum == nextNum:
        nums[index] = currentNum * 2
        nums[index + 1] = 0
    
    result = [0] * len(nums)
    currentIndex = 0
    for num in nums:
      if num != 0:
        result[currentIndex] = num
        currentIndex += 1
    return result