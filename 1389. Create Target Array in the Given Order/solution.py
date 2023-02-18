class Solution(object):
  def createTargetArray(self, nums, index):
    """
    :type nums: List[int]
    :type index: List[int]
    :rtype: List[int]
    """
    result = [-1] * len(nums)
    for position in range(len(nums)):
      if result[index[position]] != -1:
        for position2 in range(len(result) - 1, index[position], -1):
          result[position2] = result[position2 - 1]
      result[index[position]] = nums[position]

    return result