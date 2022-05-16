class Solution(object):
  def check(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    found = 0
    for index in range(len(nums)):
      if nums[index] > nums[(index + 1) % len(nums)]:
        found += 1
      if found > 1:
        return False
    
    return True