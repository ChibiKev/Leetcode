class Solution(object):
  def removeDuplicates(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    unique = 1
    for index in range(1, len(nums)):
      if nums[index] != nums[index - 1]:
        nums[unique] = nums[index]
        unique += 1
    return unique