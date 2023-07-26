class Solution(object):
  def longestAlternatingSubarray(self, nums, threshold):
    """
    :type nums: List[int]
    :type threshold: int
    :rtype: int
    """
    result = 0
    last = float('inf')

    index = 0
    while index < len(nums):
      if nums[index] > threshold or (index > 0 and nums[index] % 2 == nums[index - 1] % 2):
        if result < index - last:
          result = index - last
        last = float('inf')
      if last == float('inf') and nums[index] <= threshold and nums[index] % 2 == 0:
        last = index
      index += 1
    
    if result < index - last:
      result = index - last

    return result