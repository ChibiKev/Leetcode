class Solution(object):
  def moveZeroes(self, nums):
    """
    :type nums: List[int]
    :rtype: None Do not return anything, modify nums in-place instead.
    """
    zeros = []
    
    for index, num in enumerate(nums):
      if num == 0:
        zeros.append(index)
        continue
      if len(zeros) == 0:
        continue
      nums[zeros.pop(0)] = num
      zeros.append(index)
      
    for zero in zeros:
      nums[zero] = 0