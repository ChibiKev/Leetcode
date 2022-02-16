class Solution(object):
  def maxProduct(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    firstMax = 0
    secondMax = 0
    for num in nums:
      if num >= firstMax:
        secondMax = firstMax
        firstMax = num
        continue
      if num > secondMax:
        secondMax = num
        
    return (firstMax - 1) * (secondMax - 1)