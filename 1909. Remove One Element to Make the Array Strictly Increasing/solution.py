class Solution(object):
  def canBeIncreasing(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    found = False
    last = 0
    for index, num in enumerate(nums):
      if last < num:
        last = num
      else:
        if found:
          return False
        if index == 1 or nums[index - 2] < num:
          last = num
        found = True

    return True