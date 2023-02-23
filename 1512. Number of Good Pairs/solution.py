class Solution(object):
  def numIdenticalPairs(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    dictionary = {}
    count = 0
    for num in nums:
      if num in dictionary:
        count += dictionary[num]
        dictionary[num] += 1
      else:
        dictionary[num] = 1
    return count