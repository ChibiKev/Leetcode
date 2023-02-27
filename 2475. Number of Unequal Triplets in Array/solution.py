class Solution(object):
  def unequalTriplets(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    dictionary = {}
    for num in nums:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1

    result = 0
    left = 0
    right = len(nums)
    for num in dictionary:
      right -= dictionary[num]
      result += left * dictionary[num] * right
      left += dictionary[num]
    
    return result