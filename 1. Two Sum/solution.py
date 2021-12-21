class Solution(object):
  def twoSum(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    dictionary = {}
    for index, value in enumerate(nums):
      search = target - value
      if search in dictionary:
        return [dictionary[search], index]
      else:
        dictionary[value] = index