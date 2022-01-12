class Solution(object):
  def sortArrayByParityII(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    begin = 0
    end = 1
    while begin < len(nums) and end < len(nums):
      if nums[begin] % 2 == 0:
        begin += 2
      elif nums[begin] % 2 != 0:
        temp = nums[begin]
        nums[begin] = nums[end]
        nums[end] = temp
        end += 2
        
    return nums