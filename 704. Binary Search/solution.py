class Solution(object):
  def search(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    low = 0
    high = len(nums) - 1
    while low <= high:
      mid = low + ((high - low) / 2)
      value = nums[mid]
      if value == target:
        return mid
      elif value < target:
        low = mid + 1
      elif value > target:
        high = mid - 1
    return -1