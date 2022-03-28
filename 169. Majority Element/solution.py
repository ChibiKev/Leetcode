class Solution(object):
  def majorityElement(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    majority = nums[0]
    count = 1
    for num in nums[1:]:
      if count == 0:
        majority = num
        count += 1
      elif majority == num:
        count += 1
      else:
        count -= 1
        
    return majority