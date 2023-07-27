class Solution(object):
  def alternatingSubarray(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    result = -1
    current = float('inf')

    last = 0
    index = 1
    while index < len(nums):
      difference = nums[index] - nums[index - 1]
      if difference == current * -1:
        current *= -1
        if index - last + 1 > result:
          result = index - last + 1
      elif difference == 1:
        current = difference
        last = index - 1
        if index - last + 1 > result:
          result = index - last + 1
      else:
        current = float('inf')
      index += 1

    return result