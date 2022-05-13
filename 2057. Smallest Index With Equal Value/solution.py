class Solution(object):
  def smallestEqual(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    for index, num in enumerate(nums):
      if index % 10 == num:
        return index
    return -1