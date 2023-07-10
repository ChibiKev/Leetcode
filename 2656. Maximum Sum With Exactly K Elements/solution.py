class Solution(object):
  def maximizeSum(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: int
    """
    maximum = 0
    for num in nums:
      if maximum < num:
        maximum = num
    
    total = 0
    for index in range(k):
      total += maximum + index
    return total