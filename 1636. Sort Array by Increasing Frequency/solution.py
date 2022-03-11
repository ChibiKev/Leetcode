class Solution(object):
  def frequencySort(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    reverseNums = sorted(nums, reverse = True)
    result = sorted(reverseNums, key = reverseNums.count)
    return result