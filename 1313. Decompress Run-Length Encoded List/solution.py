class Solution(object):
  def decompressRLElist(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    result = []
    for index in range(0, len(nums) - 1, 2):
      frequency = nums[index]
      value = nums[index + 1]
      for amount in range(frequency):
        result.append(value)

    return result