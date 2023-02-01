class Solution(object):
  def removeElement(self, nums, val):
    """
    :type nums: List[int]
    :type val: int
    :rtype: int
    """
    nums.sort()
    count = 0
    for index in range(0, len(nums)):
      if nums[index] != val:
        nums[count] = nums[index]
        count += 1
    return count