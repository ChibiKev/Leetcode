class Solution(object):
  def smallestRangeI(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: int
    """
    maximum = float('-inf')
    minimum = float('inf')
    for num in nums:
      if num < minimum:
        minimum = num
      if num > maximum:
        maximum = num
    
    if maximum - minimum > k * 2:
      return maximum - minimum - k * 2
    return 0