class Solution(object):
  def findTheArrayConcVal(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    result = 0
    for index in range(0, len(nums) / 2):
      concat = str(nums[index]) + str(nums[len(nums) - 1 - index])
      result += int(concat)
    
    if len(nums) % 2 == 1:
      result += nums[len(nums) / 2]
    
    return result