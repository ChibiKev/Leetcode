class Solution(object):
  def numberOfPairs(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    result = [0, 0]
    dictionary = {}
    for num in nums:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1

    for num in dictionary:
      result[0] += dictionary[num] / 2
      if dictionary[num] % 2 == 1:
        result[1] += 1

    return result