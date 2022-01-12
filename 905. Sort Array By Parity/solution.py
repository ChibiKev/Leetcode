class Solution(object):
  def sortArrayByParity(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    begin = 0
    end = len(nums) - 1
    
    while begin < end:
      if nums[begin] % 2 == 0:
        begin += 1
      elif nums[begin] % 2 != 0:
        temp = nums[begin]
        nums[begin] = nums[end]
        nums[end] = temp
        end -= 1
        
    return nums