class Solution(object):
  def specialArray(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    nums.sort(reverse=True)
    index = 0
    while index < len(nums) and index < nums[index]:
      index += 1
    if index < len(nums):
      if index == nums[index]:
        return -1
    return index