class Solution(object):
  def isMonotonic(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    increase = False
    decrease = False
    
    for index in range(len(nums) - 1):
      if nums[index] < nums[index + 1]:
        increase = True
      if nums[index] > nums[index + 1]:
        decrease = True
        
    if increase and decrease:
      return False
    return True